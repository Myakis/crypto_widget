import { Layout } from '@/shared/ui'
import { CryptoBlock } from '@/widgets/CryptoBlock'
import { LayoutHeader } from '@/widgets/LayoutHeader'
import { LayoutProfileCard } from '@/widgets/LayoutProfileCard'

export const layoutWithWidget = (
  <Layout
    headerSlot={
      <LayoutHeader rightContentSlot={<LayoutProfileCard isWidget />} />
    }
    widget={<CryptoBlock />}
  />
)
