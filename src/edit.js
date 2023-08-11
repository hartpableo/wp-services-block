import { __ } from '@wordpress/i18n';
import { useBlockProps, InnerBlocks } from '@wordpress/block-editor';

import './editor.scss';

export default function Edit(props) {
	const { attributes, setAttributes, clientId } = props;
	const { blockID } = attributes;

	setAttributes({ blockID: !blockID ? clientId : blockID });

	return (
		<section { ...useBlockProps({
			id: `service-block--${blockID}`,
			className: `services-block`
		}) }>
			<InnerBlocks
				allowedBlocks={[ "create-block/hart-service-item-block" ]}
				template={[
					[ "create-block/hart-service-item-block" ],
					[ "create-block/hart-service-item-block" ],
					[ "create-block/hart-service-item-block" ]
				]}
			/>
		</section>
	);
}
