declare namespace NativeLogsPlugin {
    interface NativeLogs {
        /**
         * Retrieve the log files
         * @param nbLines          The max number of lines
         * @param bCopyToClipboard Copy the log to the clipboard
         * @param success:         callback to retrieve the log
         * @param failure:         Optional callback invoked in case of an error
         *
         */
        getLog(
            nbLines: number,
            bCopyToClipboard: boolean,
            success: (logs: string) => void,
            failure?: (error: string) => void
        ): void;

        /**
         * Get native logs with extra query parameters
         *
         * @param {number} nbLines
         * @param {string} parameter
         * @param {(logs: string) => void} success
         * @param {(error: string) => void} [failure]
         * @memberof NativeLogs
         */
        getLogWithParameters(
            nbLines: number,
            parameter: string,
            success: (logs: string) => void,
            failure?: (error: string) => void,
        );

       
    }
}
interface CordovaPlugins {
    nativeLogs : NativeLogsPlugin.NativeLogs;
}

declare var NativeLogs: NativeLogsPlugin.NativeLogs;
