import { DefaultDashboard, type DashboardViewServerProps } from '@payloadcms/next/views'
import Link from 'next/link'
import React from 'react'
import type { PayloadRequest } from 'payload'

import type { Media, User } from '@/payload-types'

type DashboardUser = User & {
  name?: string | null
  profileImage?: number | Media | null
}

export async function AdminAvatar({ req }: { req: PayloadRequest | null | undefined }) {
  // Handle case where req might be undefined (e.g., during static generation)
  if (!req) {
    const initial = 'A'
    return (
      <span
        aria-hidden="true"
        style={{
          width: 25,
          height: 25,
          borderRadius: '50%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          background: 'var(--theme-elevation-150)',
          color: 'var(--theme-text)',
          fontSize: 12,
          fontWeight: 600,
        }}
      >
        {initial}
      </span>
    )
  }

  const user = req.user as DashboardUser | null | undefined
  let profileImageUrl: string | null = null

  if (typeof user?.profileImage === 'number') {
    try {
      const media = await req.payload.findByID({
        collection: 'media',
        id: user.profileImage,
      })
      profileImageUrl = media.url || null
    } catch {
      // A missing media item should not break the admin header.
    }
  } else if (user?.profileImage && typeof user.profileImage === 'object') {
    profileImageUrl = user.profileImage.url || null
  }

  if (profileImageUrl) {
    return (
      // eslint-disable-next-line @next/next/no-img-element
      <img
        src={profileImageUrl}
        alt={user?.name || user?.email || 'Administrator'}
        width={25}
        height={25}
        style={{ width: 25, height: 25, borderRadius: '50%', objectFit: 'cover', display: 'block' }}
      />
    )
  }

  const initial = (user?.name || user?.email || 'A').trim().charAt(0).toUpperCase()

  return (
    <span
      aria-hidden="true"
      style={{
        width: 25,
        height: 25,
        borderRadius: '50%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        background: 'var(--theme-elevation-150)',
        color: 'var(--theme-text)',
        fontSize: 12,
        fontWeight: 600,
      }}
    >
      {initial}
    </span>
  )
}

export default async function Dashboard(props: DashboardViewServerProps) {
  const user = props.initPageResult.req.user as DashboardUser | null | undefined

  let profileImageUrl: string | null = null
  if (user && typeof user.profileImage === 'number') {
    try {
      const media = await props.initPageResult.req.payload.findByID({
        collection: 'media',
        id: user.profileImage,
      })
      profileImageUrl = media.url || null
    } catch {
      // Missing media should never break the dashboard.
    }
  } else if (user?.profileImage && typeof user.profileImage === 'object') {
    profileImageUrl = user.profileImage.url || null
  }

  const displayName = user?.name || user?.email || 'Administrator'
  const initials = displayName.trim().charAt(0).toUpperCase()

  return (
    <div>
      <Link
        href="/admin/account"
        className="admin-profile-card"
        aria-label="Open account settings"
        style={{
          display: 'flex',
          alignItems: 'center',
          gap: '1rem',
          padding: '1.5rem 2rem',
          margin: '0 2rem 2rem',
          border: '1px solid var(--theme-elevation-150)',
          borderRadius: 'var(--style-radius-m)',
          background: 'var(--theme-input-bg)',
          boxShadow: 'var(--theme-shadow-sm)',
          color: 'inherit',
          textDecoration: 'none',
        }}
      >
        {profileImageUrl ? (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            src={profileImageUrl}
            alt={displayName}
            width={72}
            height={72}
            style={{
              borderRadius: '50%',
              objectFit: 'cover',
              flexShrink: 0,
            }}
          />
        ) : (
          <div
            style={{
              width: 72,
              height: 72,
              borderRadius: '50%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: 28,
              fontWeight: 600,
              color: 'var(--theme-text)',
              background: 'var(--theme-elevation-100)',
              flexShrink: 0,
            }}
          >
            {initials}
          </div>
        )}

        <div style={{ minWidth: 0 }}>
          <h1
            style={{
              margin: 0,
              fontSize: '1.5rem',
              lineHeight: '1.25',
              color: 'var(--theme-text)',
              overflow: 'hidden',
              textOverflow: 'ellipsis',
              whiteSpace: 'nowrap',
            }}
          >
            {displayName}
          </h1>
          {user?.email && (
            <p style={{ margin: '0.25rem 0 0', color: 'var(--theme-elevation-400)' }}>
              {user.email}
            </p>
          )}
        </div>
      </Link>

      <DefaultDashboard {...props} />
    </div>
  )
}
