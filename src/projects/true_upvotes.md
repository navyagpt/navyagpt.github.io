---
title: TrueUpvotes
date: 2022-07-30
repo: navyagpt/TrueUpvotes
topics:
  [
    "Python",
    "statistical modeling",
    "deep learning",
    "social network analysis",
    "reddit",
    "data mining",
  ]
lead: Predicting Reddit post upvotes using a modified DistilBert model.
image: trueup.png
---

Scraped over 1 million posts from various subreddits using the Reddit API to
create a dataset for predicting the number of upvotes based on various metrics
and the structure of the posts. Conducted univariate analysis and treated
outliers and missing values to explore the data and identify potential factors
affecting collinearity in the dataset. Applied cluster algorithms (k-means and
hierarchical clustering) to identify the most upvoted genres. Implemented a
modified DistilBert model with a context module, n-grammar, and attention module
to summarize, extract relationships, perform named entity recognition, and
extract keywords from the collected dataset corpus. The proposed architecture
achieved an accuracy of 96.8% in predicting the upvote category. Designed,
implemented and pitched TextQuraton, a handwriting curating application for
parsing medical bills and using the data to identify fraudulent bills.
Implemented a modified DistilBert based classifier coupled with context module
and n-grammar alongside attention module. Developed spatial transformers
alongside a CRNN and bidirectional-LSTM module to parse handwritten bills taking
into consideration the augmented images. Achieved an accuracy of 93.67% averaged
over all the extracted tags.

**Links: [GitHub](https://github.com/navyagpt/TrueUpvotes)**
