import {
    expect
} from 'chai';

import {
    CLIEngine
} from 'eslint';

describe(`eslintrc`, () => {
    it(`is valid`, () => {
        let cli;

        cli = new CLIEngine({
            useEslintrc: false,
            configFile: `./eslintrc.json`
        });

        // @todo This does not validate whether rules actually exist.
        expect(cli.executeOnText(`let foo;\n\nfoo = () => {};\nfoo();\n`).errorCount).to.equal(0);
    });
});
