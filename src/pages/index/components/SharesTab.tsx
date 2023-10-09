export default function SharesTab(props: {
  show: boolean
}) {
  return (
    <div style={{ display: props.show ? undefined : 'none' }}>
      Shares
    </div>
  )
}
