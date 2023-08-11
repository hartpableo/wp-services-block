import { useBlockProps, RichText } from '@wordpress/block-editor';

export default function Save(props) {
	const { attributes } = props;
	const { 
		blockID,
		imgID, imgSrc, imgAlt, imgWidth, imgHeight, imgSrcset, imgSizes,
		serviceName, serviceNameTag, hasLink,
	} = attributes;

	return (
		<section { ...useBlockProps.save({
			id: `service--${blockID}`,
			className: `service-item`
		}) }>
			<RichText
				tagName={ serviceNameTag }
				value={ serviceName }
			/>
		</section>
	);
}
