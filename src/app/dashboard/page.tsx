import DashboardPage from '@/components/pages/DashboardPage'
import { WalletGuard } from '@/components/auth/WalletGuard'

export default function Dashboard() {
  return (
    <WalletGuard>
      <DashboardPage />
    </WalletGuard>
  )
}