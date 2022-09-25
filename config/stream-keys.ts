// This string need that sould did't have problem with conflicts.
const app = 'BearBy';


export const MTypeTabContent = {
  CONTENT: `@/${app}/content-script`,
  INJECTED: `@/${app}/injected-script`
};

export const MTypePopup = {
  GET_LATEST_BLOCK: `@/${app}/get-latest-block-number`,
  GET_RANDOM_WORDS: `@/${app}/generate-random-words`,

  GET_WALLET_STATE: `@/${app}/get-wallet-state`,
  CREATE_WALLET: `@/${app}/create-wallet`,
  UNLOCK_WALLET: `@/${app}/unlock-wallet`,
  WALET_LOGOUT: `@/${app}/wallet-logout`,

  REMOVE_ACCOUNT: `@/${app}/remove-account`,
  SELECT_ACCOUNT: `@/${app}/select-account`,
  ADD_ACCOUNT: `@/${app}/add-account`,
  RESTORE_KEY: `@/${app}/restore-key`,
  SET_ACCOUNT_NAME: `@/${app}/set-account-name`,

  BALANCE_UPDATE: `@/${app}/balance-update`,

  SELECT_NETWORK: `@/${app}/select-network`,
  GET_NETWORK_CONFIG: `@/${app}/get-network-config`,
  SET_COUNT: `@/${app}/set-network-count`,
  ADD_NODE: `@/${app}/add-network-node`,
  SORT_NODES: `@/${app}/sort-nodes-apis`,
  REMOVE_NODES: `@/${app}/remove-nodes-api`,

  SET_DOWNGRADE_NODE: `@/${app}/set-downgrade-node-flag`,
  SET_CURRENCY:`@/${app}/set-currency`,
  SET_THEME:`@/${app}/set-theme`,
  SET_LOCALE:`@/${app}/set-locale`
};

export const MTypeTab = {
  GET_WALLET_DATA: `@/${app}/injected-get-wallet-data`,
  ACCOUNT_CHANGED: `@/${app}/accounts-just-changed`
};
