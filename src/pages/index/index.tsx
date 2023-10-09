import { createSignal } from 'solid-js'

import DownloadsTab from './components/DownloadsTab'
import SharesTab from './components/SharesTab'

export default function IndexPage() {
  const [activeTab, setActiveTab] = createSignal<'downloads' | 'shares'>('downloads')

  return (
    <div
      space-y-12
      flex flex-col
      items-center
    >
      {/* tabs */}
      <div flex space-x-8 text-2xl cursor-pointer>
        <div onClick={() => setActiveTab('downloads')}>
          Downloads
        </div>
        <div onClick={() => setActiveTab('shares')}>
          Shares
        </div>
      </div>
      {/* divider */}
      <hr w-100 my-8 border="~ white" />
      {/* downloads tab */}
      <DownloadsTab show={activeTab() === 'downloads'} />
      {/* shares tab */}
      <SharesTab show={activeTab() === 'shares'} />
    </div>
  )
}
