type FooterStatus = 'initial' | 'ready' | 'processing' | 'failed'

interface FooterProps {
  status: FooterStatus
  durationMs?: number
}