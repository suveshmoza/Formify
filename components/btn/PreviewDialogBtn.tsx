import React from 'react';
import { Button } from '../ui/button';
import { MdOutlinePreview } from 'react-icons/md';
import { Dialog, DialogContent, DialogTrigger } from '../ui/dialog';
import useDesigner from '../hooks/useDesigner';
import { FormElements } from '../formElements/FormElements';

function PreviewDialogBtn() {
	const { elements } = useDesigner();

	return (
		<Dialog>
			<DialogTrigger asChild>
				<Button variant={'outline'} className="gap-1">
					Preview <MdOutlinePreview className="w-5 h-5" />
				</Button>
			</DialogTrigger>
			<DialogContent className="w-full h-screen max-h-screen max-w-full flex flex-col flex-grow p-0 gap-0">
				<div className="px-4 py-2 border-b">
					<p className="text-lg font-bold text-muted-foreground">
						Form Preview
					</p>
					<p className="text-sm text-muted-foreground">
						This is how your form will look like after publishing.
					</p>
				</div>
				<div className="bg-accent p-4 flex flex-col flex-grow items-center justify-center bg-[url(/pattern.svg)] dark:bg-[url(/pattern-dark.svg)]">
					<div className="max-w-[620px] flex flex-col gap-4 flex-grow bg-background h-full w-full rounded-2xl p-8 overflow-y-auto">
						{elements.map((element) => {
							const FormComponent = FormElements[element.type].formComponent;
							return (
								<FormComponent key={element.id} elementInstance={element} />
							);
						})}
					</div>
				</div>
			</DialogContent>
		</Dialog>
	);
}

export default PreviewDialogBtn;
