# soshiki-sources
This library is the main interface for creating a source for the Soshiki application.  
## Getting Started
To get started, install the command-line interface (`soshiki-cli` on npm) globally.
```pwsh
npm install -g soshiki-cli
```
### Adding to the main repository
If you would like to contribute to the main sources repository (recommended), clone https://github.com/phiefferj24/soshiki-sources and get started there
### Creating your own repository
If you would like to create your own repository, create a folder to work in. Inside that folder, create three more directories, those being `text`, `image`, and `video`.  
## Creating a source
Choose the folder corresponding to the source type you wish to create, and then create a folder inside of that one, preferably named whatever your source name is (e.g. `MangaDex`).  
### Dependencies
`cd` into that folder, and run `npm init` to initialize npm.   
Now, run the following commands:
```pwsh
npm install -D browserify babelify @babel/preset-env
npm install soshiki-sources
```
### Structure
Inside of that folder, make two more folders, `res` and `src`.  
`res` should contain two files: the icon for the source and the source manifest, named `manifest.json`. The source manifest structure is as such:
```json
{
    "name": "MangaDex", // The name of the source (should be the same as the folder name)
    "author": "JimIsWayTooEpic", // Your name (this will show up under the source)
    "id": "multi_mangadex", // Your source language (multi if multi-language), underscore, the id. multi_mangadex, en_gogoanime, et cetera.
    "icon": "icon.png", // The name of the icon file within the res folder. Can be anything.
    "version": "0.0.1", // Your source version
    "type": "image", // The type of source, can be text, image, or video
    "schema": 1 // The source schema version. Currently, the latest version is 1.
}
```
Now, within the `src` folder, create a new typescript (or javascript) file. Preferably name this the same as the outlying directory and the soure name.  
Within that file, put in the following, extending the proper class for your source type (e.g. `TextSource` for text).
```typescript
export default class Source extends ImageSource {

}
```
Fill in the required methods and import the necessary types before moving onto the next step.
## Methods
### Common
`async getListing(previousInfo: EntryResultsInfo | null, listing: Listing): Promise<EntryResults> { }`  
This method should provide listings that the site displays, such as new releases or trending items.  
`async getSearchResults(previousInfo: EntryResultsInfo | null, query: string, filters: Filter[]): Promise<EntryResults> { }`  
This method should provide search results based on a search query and the filters set by the user.  
`async getEntry(id: string): Promise<Entry> { }`  
This method should provide entry information based on an ID.  
`async getFilters(): Promise<Filter[]> { }`  
This method should provide the search filters available on the site.  
`async getListings(): Promise<Listing[]> { }`  
This method should provide the listings available to choose from.  
`async getSettings(): Promise<Filter[]> { }`  
This method should provide any persistent source settings.  
### Text-specific
`async getChapters(id: string): Promise<TextChapter[]> { }`  
This method should provide chapters for an entry.  
`async getChapterDetails(id: string, entryId: string): Promise<TextChapterDetails> { }`  
This method should provide the details for a given chapter.  
### Image-specific
`async getChapters(id: string): Promise<ImageChapter[]> { }`  
This method should provide chapters for an entry.  
`async getChapterDetails(id: string, entryId: string): Promise<ImageChapterDetails> { }`  
This method should provide the details for a given chapter.  
`async modifyImageRequest(url: string, options: FetchOptions): Promise<{url: string, options: FetchOptions}> { }`  
This method should modify the page images requested if needed by setting headers, editing the request body, et cetera.  
### Video-specific
`async getEpisodes(id: string): Promise<VideoEpisode[]> { }`  
This method should provide episodes for an entry.  
`async getEpisodeDetails(id: string, entryId: string): Promise<VideoEpisodeDetails> { }`  
This method should provide details for a given episode.  
`async modifyVideoRequest(url: string, options: FetchOptions): Promise<{url: string, options: FetchOptions}> { }`  
This method should modify the video requested if needed by setting headers, editing the request body, et cetera.  
## Other Things
When creating objects, use the given creater methods (e.g. createEntry({...})). This is suggested for most things but **required** when creating filters due to some internal quirks.  
When requesting, you **must** use the `fetch` method that can be imported from `soshiki-sources`, **not** the built-in one.  
When parsing a document, pass in an HTML string to get a document by using `new Document(str)`. Make sure `Document` is imported from `soshiki-sources`. Additionally, before returning from the function, you **must** call `<document instance>.free()` to free the document from memory. This will make the document and all elements referenced from it unavailable.
## Support
If you need help, feel free to ping me in the discord.  
This is still very early in development. Expect things to change.