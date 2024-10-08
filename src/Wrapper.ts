import { ConfigurationPlain, Eyes } from '@applitools/eyes';
import { SpecType } from '@applitools/driver';
import { CheckSettingsAutomationFluent, CheckSettingsImageFluent } from '@applitools/eyes/types/input/CheckSettings';

export class Wrapper<TSpec extends SpecType = SpecType> {
    constructor(private readonly eyes: Eyes<TSpec>, private readonly config: ConfigurationPlain<TSpec>) {
    }

    async open() {
        await this.eyes.open(this.config);
    }

    async check(name: string, checkSettings: CheckSettingsImageFluent | CheckSettingsAutomationFluent<TSpec>) {
        await this.eyes.check(name, checkSettings);
    }

    async close() {
        await this.eyes.open(this.config);
    }
}
