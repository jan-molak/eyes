import { ConfigurationPlain, Eyes } from '@applitools/eyes';
import { SpecType } from '@applitools/driver';

export async function wrapper<TSpec extends SpecType>(eyes: Eyes<TSpec>, config: ConfigurationPlain<TSpec>) {
    await eyes.open(config);
    // ...
    await eyes.closeAsync();
}
