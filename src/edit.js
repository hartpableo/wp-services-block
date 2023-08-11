import { __ } from '@wordpress/i18n';
import { useBlockProps, InnerBlocks } from '@wordpress/block-editor';

import './editor.scss';

export default function Edit(props) {
	return (
		<section { ...useBlockProps() }>
			<InnerBlocks
				allowedBlocks={[ "create-block/hart-service-item-block" ]}
			/>
		</section>
	);
}
