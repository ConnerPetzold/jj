import { jsx, Fragment, jsxs } from 'file:///Users/conner/jj/website/node_modules/.pnpm/react@19.1.1/node_modules/react/jsx-runtime.js';

let frontmatter = {
  "title": "Testimonials"
};
let extractedReferences = [];
let structuredData = {
  "contents": [{
    "heading": void 0,
    "content": "You might not be ready to make the jump to Jujutsu yet. It's understandable; new\ntools come with new lessons, failures, and ideas to absorb. They require\npractice. In order to provide some motivation, we've collected a number of real,\n100% authentic testimonials \u2014 from our loving users, our silly developers\n\u2014 all to tip the scales and get you on our side!"
  }, {
    "heading": "what-the-users-have-to-say",
    "content": "I've spent many years of my career working on version control. What I like\nmost about Jujutsu is how it has non-obvious solutions to UX problems that\nwe've run into in the past. What most people may not realize is that there are\nmany novel features which all interlock to make it easy to use.For example, consider Jujutsu's support for automatically rebasing descendants\nof amended revisions. When we implemented that in Mercurial, we ran into an\nissue: what if there's a merge conflict? Our solution was to warn users and\njust not perform the auto-rebase. Now, suddenly, users have to understand that\nthere can be old versions of the same revision visible in their log, and learn\nhow to fix this state.In contrast, Jujutsu's solution is to simply make merge conflicts first-class.\nThis is not just an improvement in general, it is also specifically an\nimprovement for auto-rebase \u2014 users no longer have to learn about old\nversions of a revision unless they want to look at the obslog.Over and over, I'm struck by how well Jujutsu demonstrates this kind of\nevolved thinking, which as an experienced version control developer I deeply\nappreciate."
  }, {
    "heading": "what-the-users-have-to-say",
    "content": "\u2014 Rain, engineer at Oxide Computer Company, former VCS developer"
  }, {
    "heading": "what-the-users-have-to-say",
    "content": "Jujutsu is amazing... I couldn't have come up with anything remotely as\nelegant.It's so rare that a solution attacks the innermost core of a problem so\nthoroughly, I genuinely feel blessed to be in its presence. And also a bit\nvindicated in not even trying to learn to use any of the tools that felt like\nmore crutches stacked upon a sand castle"
  }, {
    "heading": "what-the-users-have-to-say",
    "content": "\u2014 Anonymous user, speaking from the shadows"
  }, {
    "heading": "what-the-users-have-to-say",
    "content": "It's the easiest time I've ever had learning a tool this deeply this quickly,\nbecause of the ability to experiment and undo, instead of triple-checking\nbefore trying a new scary command."
  }, {
    "heading": "what-the-users-have-to-say",
    "content": "\u2014 Scott Olson, advanced Git user and now a Jujutsu user"
  }, {
    "heading": "what-the-users-have-to-say",
    "content": `I initially started to use Jujutsu for personal repos, and it has quickly
gone from "neat, let's try this more" to "very neat, added to my permanent
config and automatically installed for new machines".`
  }, {
    "heading": "what-the-users-have-to-say",
    "content": "\u2014 Poliorcetics, on GitHub"
  }, {
    "heading": "what-the-users-have-to-say",
    "content": "when i worked on the rust compiler, my job was to chain together a bunch of\nstrange and cursed tools that broke often. jujutsu breaks about half as\nmuch, so that's pretty good i guess"
  }, {
    "heading": "what-the-users-have-to-say",
    "content": "\u2014 jyn514, Rust contributor"
  }, {
    "heading": "what-the-users-have-to-say",
    "content": "Jujutsu is pretty cool, you can even keep most of your existing workflows"
  }, {
    "heading": "what-the-users-have-to-say",
    "content": "\u2014 Ben, who doesn't want you keeping your existing workflow"
  }, {
    "heading": "what-the-users-have-to-say",
    "content": "Wait, it's not called Jujitsu?"
  }, {
    "heading": "what-the-users-have-to-say",
    "content": "\u2014 Phil, Mercurial contributor (who doesn't have to learn Git, now that\nJujutsu exists)"
  }, {
    "heading": "what-the-users-have-to-say",
    "content": "When I heard about Jujutsu I decided to try it out before forming an opinion.\nTechnically it never formed, because I haven't considered going back."
  }, {
    "heading": "what-the-users-have-to-say",
    "content": "\u2014 gul banana, computer programmer"
  }, {
    "heading": "what-the-users-have-to-say",
    "content": "muwhahaha, I have corrupted my cofounder and now 100% of brontosource dev is on JJ."
  }, {
    "heading": "what-the-users-have-to-say",
    "content": "\u2014 Matt Kulunkundis, cofounder BrontoSource"
  }, {
    "heading": "what-the-users-have-to-say",
    "content": "jj is genuinely the first tool since Rust that has me excited."
  }, {
    "heading": "what-the-users-have-to-say",
    "content": "\u2014 David Barsky, rust-analyzer and tokio-rs/tracing developer"
  }, {
    "heading": "what-the-users-have-to-say",
    "content": "Today I did some complex surgery on a legacy repo that has been committed to\nfor years by a number of individuals with varying hygienic habits. [..]Now, this still took me about two hours using jj. But at no point did I\nseriously consider physical violence to humans or inanimate objects.\nEverything progressed calmly and methodically. I was able to introspect\nchanges before I made them, and when I did screw up\u2026 jj undo to the\nrescue."
  }, {
    "heading": "what-the-users-have-to-say",
    "content": "\u2014 An unknown scientist, who couldn't have done it with Git."
  }, {
    "heading": "what-the-users-have-to-say",
    "content": `jj was my first exposure to revsets and at first I was
"why would I ever need that", but now after exercising that math part of my
brain that's been stale since high school, they're indispensable`
  }, {
    "heading": "what-the-users-have-to-say",
    "content": "\u2014 Marijan Smetko, who previously only knew Git."
  }, {
    "heading": "what-the-users-have-to-say",
    "content": "I think my favorite thing about jj is it makes the way I abused Git via\nlazygit the standard way of doing things"
  }, {
    "heading": "what-the-users-have-to-say",
    "content": "\u2014 Isaac Corbrey, reformed Git user"
  }, {
    "heading": "what-the-developers-have-to-say",
    "content": "I've been a FOSS contributor using Git for over 16 years, and Jujutsu\ncontinues to amaze me every day. It has that sweet simplicity I was fond of in\nDarcs, but it boils down all my most core and fundamental workflows \u2014\ndeveloped over years of experience \u2014 into a simple set of primitives.\nThe internal design is simple and beautiful; it looks like a database, making\nthe implementation elegant, safe, and extensible. All this, using the same Git\nrepositories my coworkers use.It's like if you found out one day that you built your entire home on a vein\nof rich gold. Every day I seem to find new and beautiful emergent behaviors,\nall adding up to a tool that is greater than the sum of its parts."
  }, {
    "heading": "what-the-developers-have-to-say",
    "content": '\u2014 Austin Seipp, "No 1. Jujutsu Fan"'
  }, {
    "heading": "what-the-developers-have-to-say",
    "content": "Honestly, I implemented signing support mostly for that sweet dopamine hit\nthat you get from the green checkmark on GitHub. Yeah."
  }, {
    "heading": "what-the-developers-have-to-say",
    "content": "\u2014 Anton Bulakh, contributor and dopamine enthusiast"
  }, {
    "heading": "what-the-developers-have-to-say",
    "content": "I'm sometimes still surprised that navigating with jj next and jj prev\nworks."
  }, {
    "heading": "what-the-developers-have-to-say",
    "content": "\u2014 Philip Metzger, author of jj next and jj prev"
  }, {
    "heading": "what-the-developers-have-to-say",
    "content": "I'm surprised when it works."
  }, {
    "heading": "what-the-developers-have-to-say",
    "content": "\u2014 Martin von Zweigbergk, project creator and leader"
  }, {
    "heading": "spread-the-word-yourself",
    "content": "Are you satisfied with Jujutsu? Ready to recommend it to a Jujillion of your\nfriends and coworkers? Great! The easiest way to help the project grow is word\nof mouth. So make sure to talk to them about it and show off your hip new tool.\nMaybe post a link to it on your other favorite tool that you love using, Slack?"
  }, {
    "heading": "spread-the-word-yourself",
    "content": "If you're not sure what to say, we hired the cheapest marketing team we could\nfind to design a list of Pre-Approved Endorsements in their laboratory. Just\ncopy and paste these right into a text box! Shilling for an open source project\nhas never been easier than this."
  }, {
    "heading": "spread-the-word-yourself",
    "content": "Jujutsu is an alright tool. I guess."
  }, {
    "heading": "spread-the-word-yourself",
    "content": "Jujutsu is my favorite software tool of all time. I am saying this for no\nparticular reason, definitely not because I was paid to."
  }, {
    "heading": "spread-the-word-yourself",
    "content": "I love Jujutsu. I love Jujutsu. I love Jujutsu. I love Jujutsu. I love\nJujutsu. I love Jujutsu. I love Jujutsu. I love Jujutsu."
  }],
  "headings": [{
    "id": "what-the-users-have-to-say",
    "content": "What the users have to say"
  }, {
    "id": "what-the-developers-have-to-say",
    "content": "What the developers have to say"
  }, {
    "id": "spread-the-word-yourself",
    "content": "Spread the word yourself"
  }]
};
const toc = [{
  depth: 2,
  url: "#what-the-users-have-to-say",
  title: jsx(Fragment, {
    children: "What the users have to say"
  })
}, {
  depth: 2,
  url: "#what-the-developers-have-to-say",
  title: jsx(Fragment, {
    children: "What the developers have to say"
  })
}, {
  depth: 2,
  url: "#spread-the-word-yourself",
  title: jsx(Fragment, {
    children: "Spread the word yourself"
  })
}];
function _createMdxContent(props) {
  const _components = {
    blockquote: "blockquote",
    code: "code",
    h2: "h2",
    p: "p",
    ...props.components
  };
  return jsxs(Fragment, {
    children: [jsx(_components.p, {
      children: "You might not be ready to make the jump to Jujutsu yet. It's understandable; new\ntools come with new lessons, failures, and ideas to absorb. They require\npractice. In order to provide some motivation, we've collected a number of real,\n100% authentic testimonials \u2014 from our loving users, our silly developers\n\u2014 all to tip the scales and get you on our side!"
    }), "\n", jsx(_components.h2, {
      id: "what-the-users-have-to-say",
      children: "What the users have to say"
    }), "\n", jsxs(_components.blockquote, {
      children: ["\n", jsx(_components.p, {
        children: "I've spent many years of my career working on version control. What I like\nmost about Jujutsu is how it has non-obvious solutions to UX problems that\nwe've run into in the past. What most people may not realize is that there are\nmany novel features which all interlock to make it easy to use."
      }), "\n", jsx(_components.p, {
        children: "For example, consider Jujutsu's support for automatically rebasing descendants\nof amended revisions. When we implemented that in Mercurial, we ran into an\nissue: what if there's a merge conflict? Our solution was to warn users and\njust not perform the auto-rebase. Now, suddenly, users have to understand that\nthere can be old versions of the same revision visible in their log, and learn\nhow to fix this state."
      }), "\n", jsx(_components.p, {
        children: "In contrast, Jujutsu's solution is to simply make merge conflicts first-class.\nThis is not just an improvement in general, it is also specifically an\nimprovement for auto-rebase \u2014 users no longer have to learn about old\nversions of a revision unless they want to look at the obslog."
      }), "\n", jsx(_components.p, {
        children: "Over and over, I'm struck by how well Jujutsu demonstrates this kind of\nevolved thinking, which as an experienced version control developer I deeply\nappreciate."
      }), "\n"]
    }), "\n", jsx(_components.p, {
      children: "\u2014 Rain, engineer at Oxide Computer Company, former VCS developer"
    }), "\n", jsxs(_components.blockquote, {
      children: ["\n", jsx(_components.p, {
        children: "Jujutsu is amazing... I couldn't have come up with anything remotely as\nelegant."
      }), "\n", jsx(_components.p, {
        children: "It's so rare that a solution attacks the innermost core of a problem so\nthoroughly, I genuinely feel blessed to be in its presence. And also a bit\nvindicated in not even trying to learn to use any of the tools that felt like\nmore crutches stacked upon a sand castle"
      }), "\n"]
    }), "\n", jsx(_components.p, {
      children: "\u2014 Anonymous user, speaking from the shadows"
    }), "\n", jsxs(_components.blockquote, {
      children: ["\n", jsx(_components.p, {
        children: "It's the easiest time I've ever had learning a tool this deeply this quickly,\nbecause of the ability to experiment and undo, instead of triple-checking\nbefore trying a new scary command."
      }), "\n"]
    }), "\n", jsx(_components.p, {
      children: "\u2014 Scott Olson, advanced Git user and now a Jujutsu user"
    }), "\n", jsxs(_components.blockquote, {
      children: ["\n", jsx(_components.p, {
        children: `I initially started to use Jujutsu for personal repos, and it has quickly
gone from "neat, let's try this more" to "very neat, added to my permanent
config and automatically installed for new machines".`
      }), "\n"]
    }), "\n", jsx(_components.p, {
      children: "\u2014 Poliorcetics, on GitHub"
    }), "\n", jsxs(_components.blockquote, {
      children: ["\n", jsx(_components.p, {
        children: "when i worked on the rust compiler, my job was to chain together a bunch of\nstrange and cursed tools that broke often. jujutsu breaks about half as\nmuch, so that's pretty good i guess"
      }), "\n"]
    }), "\n", jsx(_components.p, {
      children: "\u2014 jyn514, Rust contributor"
    }), "\n", jsxs(_components.blockquote, {
      children: ["\n", jsx(_components.p, {
        children: "Jujutsu is pretty cool, you can even keep most of your existing workflows"
      }), "\n"]
    }), "\n", jsx(_components.p, {
      children: "\u2014 Ben, who doesn't want you keeping your existing workflow"
    }), "\n", jsxs(_components.blockquote, {
      children: ["\n", jsx(_components.p, {
        children: "Wait, it's not called Jujitsu?"
      }), "\n"]
    }), "\n", jsx(_components.p, {
      children: "\u2014 Phil, Mercurial contributor (who doesn't have to learn Git, now that\nJujutsu exists)"
    }), "\n", jsxs(_components.blockquote, {
      children: ["\n", jsx(_components.p, {
        children: "When I heard about Jujutsu I decided to try it out before forming an opinion.\nTechnically it never formed, because I haven't considered going back."
      }), "\n"]
    }), "\n", jsx(_components.p, {
      children: "\u2014 gul banana, computer programmer"
    }), "\n", jsxs(_components.blockquote, {
      children: ["\n", jsx(_components.p, {
        children: "muwhahaha, I have corrupted my cofounder and now 100% of brontosource dev is on JJ."
      }), "\n"]
    }), "\n", jsx(_components.p, {
      children: "\u2014 Matt Kulunkundis, cofounder BrontoSource"
    }), "\n", jsxs(_components.blockquote, {
      children: ["\n", jsx(_components.p, {
        children: "jj is genuinely the first tool since Rust that has me excited."
      }), "\n"]
    }), "\n", jsxs(_components.p, {
      children: ["\u2014 David Barsky, rust-analyzer and ", jsx(_components.code, {
        children: "tokio-rs/tracing"
      }), " developer"]
    }), "\n", jsxs(_components.blockquote, {
      children: ["\n", jsx(_components.p, {
        children: "Today I did some complex surgery on a legacy repo that has been committed to\nfor years by a number of individuals with varying hygienic habits. [..]"
      }), "\n", jsxs(_components.p, {
        children: ["Now, this still took me about two hours using jj. But at no point did I\nseriously consider physical violence to humans or inanimate objects.\nEverything progressed calmly and methodically. I was able to introspect\nchanges before I made them, and when I did screw up\u2026 ", jsx(_components.code, {
          children: "jj undo"
        }), " to the\nrescue."]
      }), "\n"]
    }), "\n", jsx(_components.p, {
      children: "\u2014 An unknown scientist, who couldn't have done it with Git."
    }), "\n", jsxs(_components.blockquote, {
      children: ["\n", jsx(_components.p, {
        children: `jj was my first exposure to revsets and at first I was
"why would I ever need that", but now after exercising that math part of my
brain that's been stale since high school, they're indispensable`
      }), "\n"]
    }), "\n", jsx(_components.p, {
      children: "\u2014 Marijan Smetko, who previously only knew Git."
    }), "\n", jsxs(_components.blockquote, {
      children: ["\n", jsx(_components.p, {
        children: "I think my favorite thing about jj is it makes the way I abused Git via\nlazygit the standard way of doing things"
      }), "\n"]
    }), "\n", jsx(_components.p, {
      children: "\u2014 Isaac Corbrey, reformed Git user"
    }), "\n", jsx(_components.h2, {
      id: "what-the-developers-have-to-say",
      children: "What the developers have to say"
    }), "\n", jsxs(_components.blockquote, {
      children: ["\n", jsx(_components.p, {
        children: "I've been a FOSS contributor using Git for over 16 years, and Jujutsu\ncontinues to amaze me every day. It has that sweet simplicity I was fond of in\nDarcs, but it boils down all my most core and fundamental workflows \u2014\ndeveloped over years of experience \u2014 into a simple set of primitives.\nThe internal design is simple and beautiful; it looks like a database, making\nthe implementation elegant, safe, and extensible. All this, using the same Git\nrepositories my coworkers use."
      }), "\n", jsx(_components.p, {
        children: "It's like if you found out one day that you built your entire home on a vein\nof rich gold. Every day I seem to find new and beautiful emergent behaviors,\nall adding up to a tool that is greater than the sum of its parts."
      }), "\n"]
    }), "\n", jsx(_components.p, {
      children: '\u2014 Austin Seipp, "No 1. Jujutsu Fan"'
    }), "\n", jsxs(_components.blockquote, {
      children: ["\n", jsx(_components.p, {
        children: "Honestly, I implemented signing support mostly for that sweet dopamine hit\nthat you get from the green checkmark on GitHub. Yeah."
      }), "\n"]
    }), "\n", jsx(_components.p, {
      children: "\u2014 Anton Bulakh, contributor and dopamine enthusiast"
    }), "\n", jsxs(_components.blockquote, {
      children: ["\n", jsxs(_components.p, {
        children: ["I'm sometimes still surprised that navigating with ", jsx(_components.code, {
          children: "jj next"
        }), " and ", jsx(_components.code, {
          children: "jj prev"
        }), "\nworks."]
      }), "\n"]
    }), "\n", jsxs(_components.p, {
      children: ["\u2014 Philip Metzger, author of ", jsx(_components.code, {
        children: "jj next"
      }), " and ", jsx(_components.code, {
        children: "jj prev"
      })]
    }), "\n", jsxs(_components.blockquote, {
      children: ["\n", jsx(_components.p, {
        children: "I'm surprised when it works."
      }), "\n"]
    }), "\n", jsx(_components.p, {
      children: "\u2014 Martin von Zweigbergk, project creator and leader"
    }), "\n", jsx(_components.h2, {
      id: "spread-the-word-yourself",
      children: "Spread the word yourself"
    }), "\n", jsx(_components.p, {
      children: "Are you satisfied with Jujutsu? Ready to recommend it to a Jujillion of your\nfriends and coworkers? Great! The easiest way to help the project grow is word\nof mouth. So make sure to talk to them about it and show off your hip new tool.\nMaybe post a link to it on your other favorite tool that you love using, Slack?"
    }), "\n", jsx(_components.p, {
      children: "If you're not sure what to say, we hired the cheapest marketing team we could\nfind to design a list of Pre-Approved Endorsements in their laboratory. Just\ncopy and paste these right into a text box! Shilling for an open source project\nhas never been easier than this."
    }), "\n", jsxs(_components.blockquote, {
      children: ["\n", jsx(_components.p, {
        children: "Jujutsu is an alright tool. I guess."
      }), "\n"]
    }), "\n", jsxs(_components.blockquote, {
      children: ["\n", jsx(_components.p, {
        children: "Jujutsu is my favorite software tool of all time. I am saying this for no\nparticular reason, definitely not because I was paid to."
      }), "\n"]
    }), "\n", jsxs(_components.blockquote, {
      children: ["\n", jsx(_components.p, {
        children: "I love Jujutsu. I love Jujutsu. I love Jujutsu. I love Jujutsu. I love\nJujutsu. I love Jujutsu. I love Jujutsu. I love Jujutsu."
      }), "\n"]
    })]
  });
}
function MDXContent(props = {}) {
  const { wrapper: MDXLayout } = props.components || {};
  return MDXLayout ? jsx(MDXLayout, {
    ...props,
    children: jsx(_createMdxContent, {
      ...props
    })
  }) : _createMdxContent(props);
}

export { MDXContent as default, extractedReferences, frontmatter, structuredData, toc };
//# sourceMappingURL=testimonials-Dv9QVEQi.mjs.map
