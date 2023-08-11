import { useBlockProps, RichText } from '@wordpress/block-editor';

export default function save(props) {
	const { attributes } = props;
	const { 
		blockID,
		imgID, imgSrc, imgAlt, imgWidth, imgHeight, imgSrcset, imgSizes,
		serviceName, serviceNameTag, hasLink, serviceLink, linkOpenNewTab,
	} = attributes;

	const linkTarget = linkOpenNewTab ? '_blank' : '_self';
	const rel = linkOpenNewTab ? 'noopener noreferrer' : 'noopener';

	return (
		<section { ...useBlockProps.save({
			id: `service--${blockID}`,
			className: `service-item`
		}) }>
		 	{
		 		!hasLink ? (
		 			<RichText.Content
		 				tagName={ serviceNameTag }
		 				value={ serviceName }
		 				className="service-name"
		 			/>
		 		) : (
		 			<a
		 				href={ serviceLink }
		 				target={ linkTarget }
		 				rel={ rel }
		 				className="service-name has-link"
		 			>
		 				{ serviceName }
		 			</a>
		 		)
		 	}
		</section>
	);
}
