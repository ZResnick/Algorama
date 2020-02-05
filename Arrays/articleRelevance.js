/*
Given an array of articles of the form:
{
  id: int,
  headline: string,
  text: string,
  summary: string,
  publication_date: string
}

...and a an array of search phrases of the form:

['string', 'string string', ...]

...return the articles in a order of relevance.

Note that irrelevant articles should not be returned, and that while not all
all the articles given will have a summery, returned articles must have  summary
*/

//APPROACH
/*
Relevancy will be the amount of times each search term is found in the
text or headline of the article.
If no summary is given, take the first paragraph of the text as the summary.
If there's only one paragraph, take that paragraph as the summary
*/
