/* @flow */
import type { Binary } from '@neo-one/server-plugin';

import execa from 'execa';

import type { CompileResult } from './index';

export default ({
  scPath,
  avmPath,
  binary,
}: {|
  scPath: string,
  avmPath: string,
  binary: Binary,
|}): Promise<CompileResult> =>
  execa(
    binary.cmd,
    binary.firstArgs.concat(['compile', 'csharp', scPath, avmPath]),
  )
    .then(() => ({}: $FlowFixMe))
    .catch(error => {
      throw new Error(`C# compilation failed: ${error.stdout}`);
    });
