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

import * as program from 'commander'
import minify from './minify'

program
  .version('0.1.0')
  .usage('[options] <file ...>')
  .option('-o, --output [output]', 'The target output directory')
  .parse(process.argv)

minify(program.args, program.output)
