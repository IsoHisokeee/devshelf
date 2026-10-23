import fs from 'fs';
import path from 'path';
import { existingTopics } from './topics_part1.js';
import { moreTopics } from './topics_part2.js';
import { extraTopics } from './topics_part3.js';
import { granularTopics } from './topics_part4.js';
import { catalogTopics } from './topics_part5.js';
import { dictionaryTopics } from './topics_part6.js';
import { standardLibraryTopics } from './topics_part7.js';
import { quickRefTopics } from './topics_part8.js';
import { referenceEncyclopedia } from './topics_part9.js';
import { coreElementsAndFunctions } from './topics_part10.js';
import { finalReferenceTopics } from './topics_part11.js';
import { cssRecipesAndFrameworks } from './topics_part12_css_recipes_frameworks.js';

const allTopics = [
  ...cssRecipesAndFrameworks,
  ...existingTopics,
  ...moreTopics,
  ...extraTopics,
  ...granularTopics,
  ...catalogTopics,
  ...dictionaryTopics,
  ...standardLibraryTopics,
  ...quickRefTopics,
  ...referenceEncyclopedia,
  ...coreElementsAndFunctions,
  ...finalReferenceTopics,
];

// Ensure unique IDs
const seen = new Set();
const uniqueTopics = [];
for (const t of allTopics) {
  if (!seen.has(t.id)) {
    seen.add(t.id);
    uniqueTopics.push(t);
  }
}

// Also build grouped REFERENCE_DATA for playground.js
const grouped = {
  html: [],
  css: [],
  javascript: [],
  php: [],
  xml: [],
  recipes: [],
  frameworks: []
};

for (const t of uniqueTopics) {
  const key = t.lang || 'html';
  if (!grouped[key]) grouped[key] = [];
  grouped[key].push(t);
}

const fileContent = `// DevShelf Comprehensive Russian Reference Database (${uniqueTopics.length} Topics)
window.DEVSHELF_REFERENCE_TOPICS = ${JSON.stringify(uniqueTopics, null, 2)};
window.REFERENCE_DATA = ${JSON.stringify(grouped, null, 2)};
`;

fs.writeFileSync(path.resolve(process.cwd(), 'reference-data.js'), fileContent, 'utf-8');
fs.writeFileSync(path.resolve(process.cwd(), 'public/reference-data.js'), fileContent, 'utf-8');
fs.writeFileSync(path.resolve(process.cwd(), 'all_resources.json'), JSON.stringify(uniqueTopics, null, 2), 'utf-8');
fs.writeFileSync(path.resolve(process.cwd(), 'reference_topics.json'), JSON.stringify(uniqueTopics, null, 2), 'utf-8');

console.log(`Generated ${uniqueTopics.length} rich Russian reference topics successfully!`);
