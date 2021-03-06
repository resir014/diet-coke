/*
 * Copyright 2017 Resi Respati <resir014@blvd.space>
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

// The reason why `noImplicitAny` is disabled is because most of the modules included here don't
// even have any form of type declarations with them. And TypeScript keeps giving me a multitude
// of those pesky implicit `any` errors no matter ow hard I try to add declaration files for them.

import * as fs from 'fs'
import * as ora from 'ora'
import * as plur from 'plur'
import * as imagemin from 'imagemin'
import * as imageminPngquant from 'imagemin-pngquant'
import * as imageminMozjpeg from 'imagemin-mozjpeg'
import * as imageminGifsicle from 'imagemin-gifsicle'
import * as imageminSvgo from 'imagemin-svgo'

const convert = (args: string[], outPath: string) => {
  const spinner = ora('Compressing images').start();

  imagemin(args, outPath, {
    plugins: [
      imageminPngquant(),
      imageminMozjpeg({ quality: 90, progressive: false }),
      imageminGifsicle(),
      imageminSvgo()
    ]
  }).then((files: any[]) => {
    spinner.stop()
    console.log(`${files.length} ${plur('image', files.length)} minified`);
  })
}

export default convert
