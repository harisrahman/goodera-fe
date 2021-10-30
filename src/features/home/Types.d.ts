export type JobPostingType = {
	description: string;
	title: string;
	image: string;
	type: string;
	publication_date: string;
	id: number;
	location: string;
	level: string;
	tags: string[];
	company: {
		id: number;
		short_name: string;
		name: string;
	};
};

export type JobPostingsType = JobPostingType[];
