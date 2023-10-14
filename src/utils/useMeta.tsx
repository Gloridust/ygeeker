import { useState, useEffect } from "react";

export default (pageMap): any => {
	const [meta, setMeta] = useState({});

	useEffect(() => {
		const metaItem = pageMap.find((item) => item.kind === "Meta");
		if (metaItem) {
			setMeta(metaItem.data);
		}
	}, [pageMap]);

	return meta;
};
