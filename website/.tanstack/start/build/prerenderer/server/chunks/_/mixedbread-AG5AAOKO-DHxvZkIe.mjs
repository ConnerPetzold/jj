import Slugger from 'file:///Users/conner/jj/website/node_modules/github-slugger/index.js';

var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __commonJS = (cb, mod) => function __require() {
  return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  __defProp(target, "default", { value: mod, enumerable: true }),
  mod
));
var require_remove_markdown = __commonJS({
  "../../node_modules/.pnpm/remove-markdown@0.6.2/node_modules/remove-markdown/index.js"(exports, module) {
    module.exports = function(md, options) {
      options = options || {};
      options.listUnicodeChar = options.hasOwnProperty("listUnicodeChar") ? options.listUnicodeChar : false;
      options.stripListLeaders = options.hasOwnProperty("stripListLeaders") ? options.stripListLeaders : true;
      options.gfm = options.hasOwnProperty("gfm") ? options.gfm : true;
      options.useImgAltText = options.hasOwnProperty("useImgAltText") ? options.useImgAltText : true;
      options.abbr = options.hasOwnProperty("abbr") ? options.abbr : false;
      options.replaceLinksWithURL = options.hasOwnProperty("replaceLinksWithURL") ? options.replaceLinksWithURL : false;
      options.htmlTagsToSkip = options.hasOwnProperty("htmlTagsToSkip") ? options.htmlTagsToSkip : [];
      options.throwError = options.hasOwnProperty("throwError") ? options.throwError : false;
      var output = md || "";
      output = output.replace(/^ {0,3}((?:-[\t ]*){3,}|(?:_[ \t]*){3,}|(?:\*[ \t]*){3,})(?:\n+|$)/gm, "");
      try {
        if (options.stripListLeaders) {
          if (options.listUnicodeChar)
            output = output.replace(/^([\s\t]*)([\*\-\+]|\d+\.)\s+/gm, options.listUnicodeChar + " $1");
          else
            output = output.replace(/^([\s\t]*)([\*\-\+]|\d+\.)\s+/gm, "$1");
        }
        if (options.gfm) {
          output = output.replace(/\n={2,}/g, "\n").replace(/~{3}.*\n/g, "").replace(/~~/g, "").replace(/```(?:.*)\n([\s\S]*?)```/g, (_, code) => code.trim());
        }
        if (options.abbr) {
          output = output.replace(/\*\[.*\]:.*\n/, "");
        }
        let htmlReplaceRegex = /<[^>]*>/g;
        if (options.htmlTagsToSkip && options.htmlTagsToSkip.length > 0) {
          const joinedHtmlTagsToSkip = options.htmlTagsToSkip.join("|");
          htmlReplaceRegex = new RegExp(
            `<(?!/?(${joinedHtmlTagsToSkip})(?=>|s[^>]*>))[^>]*>`,
            "g"
          );
        }
        output = output.replace(htmlReplaceRegex, "").replace(/^[=\-]{2,}\s*$/g, "").replace(/\[\^.+?\](\: .*?$)?/g, "").replace(/\s{0,2}\[.*?\]: .*?$/g, "").replace(/\!\[(.*?)\][\[\(].*?[\]\)]/g, options.useImgAltText ? "$1" : "").replace(/\[([\s\S]*?)\]\s*[\(\[].*?[\)\]]/g, options.replaceLinksWithURL ? "$2" : "$1").replace(/^(\n)?\s{0,3}>\s?/gm, "$1").replace(/^\s{1,2}\[(.*?)\]: (\S+)( ".*?")?\s*$/g, "").replace(/^(\n)?\s{0,}#{1,6}\s*( (.+))? +#+$|^(\n)?\s{0,}#{1,6}\s*( (.+))?$/gm, "$1$3$4$6").replace(/([\*]+)(\S)(.*?\S)??\1/g, "$2$3").replace(/(^|\W)([_]+)(\S)(.*?\S)??\2($|\W)/g, "$1$3$4$5").replace(/(`{3,})(.*?)\1/gm, "$2").replace(/`(.+?)`/g, "$1").replace(/~(.*?)~/g, "$1");
      } catch (e) {
        if (options.throwError) throw e;
        console.error("remove-markdown encountered error: %s", e);
        return md;
      }
      return output;
    };
  }
});
var import_remove_markdown = __toESM(require_remove_markdown());
var slugger = new Slugger();
function extractHeadingTitle(text) {
  var _a;
  const trimmedText = text.trim();
  if (!trimmedText.startsWith("#")) {
    return "";
  }
  const lines = trimmedText.split("\n");
  const firstLine = (_a = lines[0]) == null ? void 0 : _a.trim();
  if (firstLine) {
    const plainText = (0, import_remove_markdown.default)(firstLine, {
      useImgAltText: false
    });
    return plainText;
  }
  return "";
}
async function search(query, options) {
  const { client, vectorStoreId, tag } = options;
  if (!query.trim()) {
    return [];
  }
  const res = await client.vectorStores.search({
    query,
    vector_store_identifiers: [vectorStoreId],
    top_k: 10,
    filters: {
      key: "generated_metadata.tag",
      operator: "eq",
      value: tag
    },
    search_options: {
      return_metadata: true
    }
  });
  return res.data.flatMap((item) => {
    const metadata = item.generated_metadata;
    const url = metadata.url || "#";
    const title = metadata.title || "Untitled";
    const chunkResults = [
      {
        id: `${item.file_id}-${item.chunk_index}-page`,
        type: "page",
        content: title,
        url
      }
    ];
    const headingTitle = item.type === "text" ? extractHeadingTitle(item.text) : "";
    if (headingTitle) {
      slugger.reset();
      chunkResults.push({
        id: `${item.file_id}-${item.chunk_index}-heading`,
        type: "heading",
        content: headingTitle,
        url: `${url}#${slugger.slug(headingTitle)}`
      });
    }
    return chunkResults;
  });
}

export { search };
//# sourceMappingURL=mixedbread-AG5AAOKO-DHxvZkIe.mjs.map
