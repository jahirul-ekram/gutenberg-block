import { __ } from '@wordpress/i18n';
import { useBlockProps, InspectorControls } from '@wordpress/block-editor';
import './editor.scss';
import Render from './render';
import { PanelBody, __experimentalInputControl as InputControl } from '@wordpress/components';

export default function Edit({ attributes, setAttributes }) {
	const { imageUrl, title, description } = attributes;
	return (
		<div {...useBlockProps()}>
			<InspectorControls>
				<PanelBody title='General'>
					<InputControl
						label="imageUrl"
						value={imageUrl}
						onChange={(e) => setAttributes({ "imageUrl": e })}
					/>
					<InputControl
						label="Title"
						value={title}
						onChange={(e) => setAttributes({ "title": e })}
					/>
					<InputControl
						label='Description'
						value={description}
						onChange={(e) => setAttributes({ "description": e })}
					/>
				</PanelBody>
			</InspectorControls>
			<Render imageUrl={imageUrl} title={title} description={description} />
		</div>
	);
}
