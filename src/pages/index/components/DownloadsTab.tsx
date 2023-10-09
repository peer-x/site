export default function DownloadsTab(props: {
  show: boolean
}) {
  return (
    <div style={{ display: props.show ? undefined : 'none' }}>
      {/* search */}
      <div pb-8 flex space-x-4 justify-center>
        <input text-black type="text" />
        <button>Search</button>
      </div>
      {/* search result */}
      <div text-center>
        {/* share name */}
        <h2 my-2 text-xl>Share name</h2>
        {/* share info */}
        <div flex space-x-4>
          <span>Size: 1.45GB</span>
          <span>Date: 2023-10-10 00:44:32</span>
          <span>Visits: 255</span>
        </div>
      </div>
      {/* divider */}
      <hr w-100 my-8 border="~ white" />
      {/* downloads list */}
      <div space-y-4>
        <div px-4 py-2 border="~ white">
          Share 1
        </div>
        <div px-4 py-2 border="~ white">
          Share 2
        </div>
        <div px-4 py-2 border="~ white">
          Share 3
        </div>
      </div>
    </div>
  )
}
