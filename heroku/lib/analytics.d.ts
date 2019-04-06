import * as Config from '@oclif/config';
import deps from './deps';
export interface RecordOpts {
    Command: Config.Command.Class;
    argv: string[];
}
export interface AnalyticsInterface {
    source: string;
    event: string;
    properties: {
        cli: string;
        command: string;
        completion: number;
        version: string;
        plugin: string;
        plugin_version: string;
        os: string;
        shell: string;
        valid: boolean;
        language: string;
        install_id: string;
    };
}
export default class AnalyticsCommand {
    config: Config.IConfig;
    userConfig: typeof deps.UserConfig.prototype;
    http: typeof deps.HTTP;
    constructor(config: Config.IConfig);
    record(opts: RecordOpts): Promise<import("http-call").HTTP<{}> | undefined>;
    readonly url: string;
    readonly authorizationToken: string | undefined;
    readonly netrcToken: string | undefined;
    readonly usingHerokuAPIKey: boolean;
    readonly netrcLogin: string | undefined;
    readonly user: string | undefined;
    _acAnalytics(id: string): Promise<number>;
    private init;
}
