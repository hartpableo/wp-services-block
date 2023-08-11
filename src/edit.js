import { __ } from '@wordpress/i18n';
import { useBlockProps, InnerBlocks, InspectorControls } from '@wordpress/block-editor';
import { PanelBody } from '@wordpress/components';
import { RangeControl } from '@wordpress/components';
import { column } from '@wordpress/icons';

import './editor.scss';

export default function Edit(props) {
	const { attributes, setAttributes, clientId } = props;
	const { blockID, columns } = attributes;

	setAttributes({ blockID: !blockID ? clientId : blockID });

	return (
		<>
			<InspectorControls>
				<PanelBody title="Manage Columns" icon={ column } initialOpen={ true }>
					<RangeControl
							label={ __("Columns", "hart-services-block") }
							value={ columns }
							onChange={ val=> setAttributes({ columns: val }) }
							min={ 1 }
							max={ 6 }
					/>
				</PanelBody>
			</InspectorControls>

			<section { ...useBlockProps({
				id: `service-block--${blockID}`,
				className: `services-block has-${columns}-cols`
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
		</>
	);
}
