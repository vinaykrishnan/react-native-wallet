import { NativeModules } from 'react-native';
const { RNWalletModule } = NativeModules;
import { _canAddPasses, _showAddPassControllerFromURL, _showAddPassControllerFromFile,_showViewControllerWithMultiplePasses } from './platform-specific';

/**
 * Check if you can add passes.
 * @param callback A callback which will receive a boolean
 */
function canAddPasses(callback) {
  _canAddPasses(RNWalletModule, callback)
}

/**
 * Show the pass controller for the provided URL.
 * The resolving promise will contain a boolean saying if the pass was added or not.
 * @param passURL URL to pkpass file
 * @return Promise Passing a boolean
 */
function showAddPassControllerFromURL(passURL) {
  return _showAddPassControllerFromURL(RNWalletModule, passURL);
}

/**
 * Show the pass controller for the provided filepath.
 * The resolving promise will contain a boolean saying if the pass was added or not.
 * @param filepath File path pkpass file
 * @return Promise Passing a boolean
 */
function showAddPassControllerFromFile(filepath) {
  return _showAddPassControllerFromFile(RNWalletModule, filepath);
}

/**
 * Show the pass controller for the provided filepath.
 * The resolving promise will contain a boolean saying if the pass was added or not.
 * @param filepath File path pkpass file
 * @return Promise Passing a boolean
 */
function showViewControllerWithMultiplePasses(healthPassString) {
  return _showViewControllerWithMultiplePasses(RNWalletModule, healthPassString);
}

module.exports = {
  canAddPasses,
  showAddPassControllerFromURL,
  showAddPassControllerFromFile,
  showViewControllerWithMultiplePasses
}
