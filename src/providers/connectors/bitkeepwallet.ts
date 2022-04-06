const ConnectToBitKeepWallet = async () => {
  let provider = null;
  if (typeof window.ethereum.isBitKeep !== 'undefined') {
    provider = window.ethereum;
    try {
      await provider.request({ method: 'eth_requestAccounts' })
    } catch (error) {
      throw new Error("User Rejected");
    }
  } else {
    throw new Error("No Binance Chain Wallet found");
  }
  return provider;
};

export default ConnectToBitKeepWallet;