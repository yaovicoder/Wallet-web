import { css }       from 'styled-components';

import { TextBase }  from './TextBase';
import { BlockBase } from './BlockBase';


export let LinkBase = css`
	${TextBase}
	${BlockBase}
	text-decoration: none;
	color: white;
`;