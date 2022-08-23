export default function ConnectWalletButton({
  connectFn,
  logoutFn,
  loading,
  address,
}) {
  return (
    <button
      className={`loginButton ${loading ? "loading" : ""}`}
      onClick={!address ? () => connectFn : () => logoutFn}
    >
      {loading ? (
        <p className="loginText">{!address ? "Connect..." : "Connected!"}</p>
      ) : (
        <p className="loadingText">loading...</p>
      )}
    </button>
  );
}
