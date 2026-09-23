'use client'

import { Link, useConfig } from '@payloadcms/ui'
import { usePathname } from 'next/navigation.js'
import { formatAdminURL } from 'payload/shared'
import React from 'react'

const baseClass = 'nav'

export default function QueriesByPageNavLink() {
  const { config } = useConfig()
  const pathname = usePathname()
  const adminRoute = config.routes.admin
  const href = formatAdminURL({ adminRoute, path: '/queries-by-page' })
  const isActive = pathname === href || pathname === `${href}/` || pathname.startsWith(`${adminRoute}/collections/leads`)

  return (
    <Link
      className={`${baseClass}__link`}
      href={href}
      id="nav-queries-by-page"
      prefetch={false}
    >
      {isActive && <div className={`${baseClass}__link-indicator`} />}
      <span className={`${baseClass}__link-label`}>Queries by Page</span>
    </Link>
  )
}
