import { __ } from '@wordpress/i18n';
import { useBlockProps, RichText, InspectorControls, MediaUpload } from '@wordpress/block-editor';
import { PanelBody, SelectControl, ToggleControl, Button } from '@wordpress/components';
import { title, image } from '@wordpress/icons';
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

	const onSelectImage = img => {
		let srcSet = `${img.sizes.full.url} ${img.sizes.full.width}w`;
		setAttributes({
			imgID: img.id,
			imgSrc: img.url,
			imgAlt: img.alt || 'Background Image',
			imgWidth: img.width,
			imgHeight: img.height,
			imgSrcset: srcSet,
			imgSizes: "100vw"
		})
	}

	const onRemoveImage = () => {
		setAttributes({
			imgID: null,
			imgSrc: "https://placehold.co/450x500",
			imgAlt: null,
			imgSrcset: null,
			imgSizes: null,
			imgWidth: null,
			imgHeight: null
		})
	}

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
				<PanelBody title="Service Image" icon={ image } initialOpen={ false }>
					<MediaUpload
							onSelect={ onSelectImage }
							allowedTypes={ [ 'image' ] }
							value={ imgID }
							render={({ open }) => (
								<>
									<Button
										className={ `hp-custom-btn ${!imgID ? 'editing' : 'preview'}` }
										onClick={ open }
									>
										<img src={ imgSrc } alt={ imgAlt } srcset={ imgSrcset } sizes={ imgSizes } width={ imgWidth } height={ imgHeight } loading="lazy" />
										<div className='hp-btn--img-edit'>
											{ !imgID && 'Set Image' }
											{ !!imgID && imgSrc && 'Change Image' }
										</div>
									</Button>
									{
										!!imgID && imgSrc && (
											<Button
												className="hp-custom-btn hp-custom-delete-btn" 
												isLink 
												isDestructive
												onClick={ onRemoveImage }
											>
												Delete Image
											</Button>
										)
									}
								</>
							)}
						/>
				</PanelBody>
			</InspectorControls>
			
			<div { ...useBlockProps({
				id: `service--${blockID}`,
				className: `service-item`
			}) }>
				<div className="service-img-wrapper">
					<img 
						className="service-img" 
						src={ imgSrc } 
						alt={ imgAlt } 
						srcset={ imgSrcset } 
						sizes={ imgSizes } 
						width={ imgWidth } 
						height={ imgHeight } 
						loading="lazy" 
					/>
				</div>
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
