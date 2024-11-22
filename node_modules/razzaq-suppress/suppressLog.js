/**
 * Suppresses console.log messages containing the specified text.
 * @param {string} text - The text to filter out from console.log messages.
 */
export const suppressLog = (text) => {
  const originalConsoleLog = console.log;
  console.log = (...args) => {
    if (args[0] && args[0].includes && args[0].includes(text)) {
      return;
    }
    originalConsoleLog(...args);
  };
};
