'use client'

import {
  ConfirmationModal,
  useFormModified,
  useModal,
  useTranslation,
} from '@payloadcms/ui'
import { useEffect, useRef } from 'react'

const BACK_GUARD_MODAL_SLUG = 'back-navigation-guard'
const SENTINEL_STATE = { __payloadBackGuard: true }

export default function BackNavigationGuard() {
  const modified = useFormModified()
  const { openModal, closeModal } = useModal()
  const { t } = useTranslation()

  const sentinelCountRef = useRef(0)
  const allowingLeaveRef = useRef(false)

  const prevent = modified

  useEffect(() => {
    if (!prevent) return

    window.history.pushState(SENTINEL_STATE, '', window.location.href)
    sentinelCountRef.current = 1
    allowingLeaveRef.current = false

    const handlePopState = () => {
      if (allowingLeaveRef.current) return
      window.history.pushState(SENTINEL_STATE, '', window.location.href)
      sentinelCountRef.current += 1
      openModal(BACK_GUARD_MODAL_SLUG)
    }

    window.addEventListener('popstate', handlePopState)
    return () => {
      window.removeEventListener('popstate', handlePopState)
      try {
        if (window.history.state === SENTINEL_STATE) {
          window.history.back()
        }
      } catch {
        // Cleanup must never break navigation.
      }
      sentinelCountRef.current = 0
    }
  }, [prevent, openModal])

  const handleConfirmLeave = () => {
    allowingLeaveRef.current = true
    closeModal(BACK_GUARD_MODAL_SLUG)
    window.history.go(-(sentinelCountRef.current + 1))
  }

  const handleStay = () => closeModal(BACK_GUARD_MODAL_SLUG)

  return (
    <ConfirmationModal
      modalSlug={BACK_GUARD_MODAL_SLUG}
      heading={t('general:leaveWithoutSaving')}
      body={t('general:changesNotSaved')}
      confirmLabel={t('general:leaveAnyway')}
      cancelLabel={t('general:stayOnThisPage')}
      onConfirm={handleConfirmLeave}
      onCancel={handleStay}
    />
  )
}
