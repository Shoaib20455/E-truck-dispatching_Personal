'use client'

import { TextareaField, TextField, useField } from '@payloadcms/ui'
import type { TextareaFieldClientComponent, TextFieldClientComponent } from 'payload'

const counterStyle = {
  marginTop: '0.25rem',
  fontSize: '0.75rem',
  lineHeight: '1.25rem',
  color: 'var(--theme-elevation-400)',
  textAlign: 'right',
} as const

const overLimitStyle = {
  color: 'var(--theme-error-400)',
  fontWeight: 600,
} as const

function CharCount({ path, max }: { path: string; max: number }) {
  const { value } = useField<string>({ path })
  const length = String(value ?? '').length
  return (
    <div style={length > max ? { ...counterStyle, ...overLimitStyle } : counterStyle}>
      {length}/{max}
    </div>
  )
}

export const MetaTitleField: TextFieldClientComponent = (props) => (
  <div>
    <TextField {...props} />
    <CharCount path={props.path} max={60} />
  </div>
)

export const MetaDescriptionField: TextareaFieldClientComponent = (props) => (
  <div>
    <TextareaField {...props} />
    <CharCount path={props.path} max={160} />
  </div>
)
