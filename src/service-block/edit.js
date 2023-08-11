import { __ } from '@wordpress/i18n';
import { useBlockProps, RichText, InspectorControls } from '@wordpress/block-editor';
import { PanelBody, SelectControl, ToggleControl } from '@wordpress/components';
import { title } from '@wordpress/icons';
import { Link } from '@10up/block-components';

export default function Edit(props) {
	const { attributes, setAttributes, clientId } = props;
	const { 
		blockID,
		imgID, imgSrc, imgAlt, imgWidth, imgHeight, imgSrcset, imgSizes,
		serviceName, serviceNameTag, hasLink, serviceLink, linkOpenNewTab,
	} = attributes;

	setAttributes({ blockID: !blockID ? clientId : blockID });

	const handleTextChange = value => setAttributes({serviceName: value});

	const handleLinkChange = value => setAttributes({
			serviceLink: value?.url,
			linkOpenNewTab: value?.opensInNewTab,
			serviceName: value?.title ?? serviceName
	});

	const handleLinkRemove = () => setAttributes({
			serviceLink: null,
			linkOpenNewTab: null
	});

	return (
		<>
			<InspectorControls>
				<PanelBody title="Manage Text" icon={ title } initialOpen={ true }>
					<SelectControl
						label="Tag to use"
						value={ serviceNameTag }
						options={[
							{ label: __( 'Heading 1', 'hart-services-block' ), value: 'h1' },
							{ label: __( 'Heading 2', 'hart-services-block' ), value: 'h2' },
							{ label: __( 'Heading 3', 'hart-services-block' ), value: 'h3' },
							{ label: __( 'Heading 4', 'hart-services-block' ), value: 'h4' },
							{ label: __( 'Heading 5', 'hart-services-block' ), value: 'h5' },
							{ label: __( 'Heading 6', 'hart-services-block' ), value: 'h6' },
							{ label: __( 'Paragraph', 'hart-services-block' ), value: 'p' },
						]}
						onChange={ val => {
							setAttributes({ serviceNameTag: val })
						} }
					/>
					<ToggleControl
						label="Has Link?"
						help={ hasLink ? "Yes" : "No" }
						checked={ hasLink }
						onChange={ () => {
								setAttributes({ hasLink: !hasLink });
						} }
					/>
				</PanelBody>
			</InspectorControls>
			
			<div { ...useBlockProps({
				id: `service--${blockID}`,
				className: `service-item`
			}) }>
				{
					!hasLink ? (
						<RichText
							tagName={ serviceNameTag }
							value={ serviceName }
							onChange={ val => setAttributes({ serviceName: val }) }
							placeholder='Enter Service Name here...'
							className="service-name"
						/>
					) : (
						<Link
							value={ serviceName }
							url={ serviceLink }
							opensInNewTab={ linkOpenNewTab }
							onTextChange={ handleTextChange }
							onLinkChange={ handleLinkChange }
							onLinkRemove={ handleLinkRemove }
							className='service-name has-link'
							placeholder='Enter Service Name here...'
            />
					)
				}
			</div>
		</>
	);
}
