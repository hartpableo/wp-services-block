import { registerBlockType } from '@wordpress/blocks';

import './style.scss';

import './service-block';

import Edit from './edit';
import save from './save';
import metadata from './block.json';

registerBlockType( metadata.name, {
	edit: Edit,
	save,
} );
