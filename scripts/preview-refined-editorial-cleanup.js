(function editorialCleanup({name,html}){
  const start=html.indexOf('<div class="research-article-body');
  const end=html.indexOf('<aside class="research-article-aside preview-toc">',start);
  if(start<0||end<0)throw Error("Unexpected article bounds "+name);
  let body=html.slice(start,end);
  const beforeWords=body.replace(/<[^>]+>/g," ").trim().split(/\s+/).length;
  const counts={faq:0,numbered:0,genericSource:0,originalLists:(body.match(/<(?:ul|ol)\b/g)||[]).length};
  const faqRe=/<h2\b[^>]*\bid="common-questions"[^>]*>\s*Common questions\s*<\/h2>[\s\S]*?(?=<section class="lowob-takeaways")/gi;
  if(faqRe.test(body)){
    counts.faq=1;
    body=body.replace(faqRe,match=>{
      if(name==="programmatic-guide"){
        const citation=match.match(/<p>For inventory verification,[\s\S]*?<\/p>/);
        return citation ? citation[0]+"\n":"";
      }
      if(name==="media-plan"){
        const citation=match.match(/<p>Before approving programmatic inventory,[\s\S]*?<\/p>/);
        return citation ? citation[0]+"\n":"";
      }
      return "";
    });
  }
  // No empty "Sources and notes" blocks. Keep actual cited studies and links.
  const emptyNotes=[
    "This is a practical editorial explanation, not a reported lowob client result.",
    "This article explains an editorial method rather than reporting a specific customer campaign. No client outcomes are implied.",
    "This is a lowob operating-model perspective, not a measured claim that all modular teams outperform agencies. Which structure works depends on scope, budget and complexity."
  ];
  for(const sentence of emptyNotes){
    body=body.replaceAll(`<p>${sentence}</p>`,"");
  }
  body=body.replace(/<section class="kol-sources"[^>]*>\s*<h2[^>]*>Sources and notes<\/h2>\s*<\/section>/g,()=>{
    counts.genericSource++;
    return "";
  });
  // FAQ-like lists were copied from older site pages and undermine the core editorial structure.
  if(name==="community-audience"){
    body=body.replace(/<p>That value might be:<\/p>\s*<ul>[\s\S]*?<\/ul>/,
      `<p>Some communities bring together experts who exchange information and help one another solve problems. Others give members a professional identity, a chance to collaborate, influence over a product, or access to economic opportunities. People may also return because they are learning, gaining recognition or developing a sense of belonging.</p>`);
    body=body.replace(/<p>A healthier participation ladder might include:<\/p>\s*<ol[^>]*>[\s\S]*?<\/ol>/,
      `<p>Participation often starts with observing and asking questions. As people become more comfortable, they can share useful resources, join working sessions and contribute to projects. Eventually some members may lead discussions or shape a product or governance decision. Each stage needs a clear invitation, not just a request to “engage.”</p>`);
    body=body.replace(/<p>Track instead:<\/p>\s*<ul>[\s\S]*?<\/ul>/,
      `<p>Look at how many newcomers make a meaningful first contribution, how often people return, and whether members help each other without relying on staff. Track distinct contributors, the time to a useful response, and work that generates product, support, knowledge or distribution value. These measures tell a more useful story than server size or message volume alone.</p>`);
    body=body.replace('<p>Each step requires a clear invitation. Telling people to "engage" is not community design.</p>',"");
  }
  if(name==="social-account-roles"){
    const mappings=[
      [/ <unused> /,""],
      [/<p>The founder account should carry:<\/p>\s*<ul>[\s\S]*?<\/ul>/,`<p>That can mean explaining a difficult tradeoff, sharing a lesson from building, recognizing a customer or partner, or expressing a view on where the market is heading. The founder has credibility because they are close to these decisions, not because they repeat the latest press release.</p>`],
      [/<p>It should carry:<\/p>\s*<ul>[\s\S]*?<\/ul>/,`<p>Use it for reliable product explanations, launches, customer and partner evidence, helpful educational resources, event information, recruiting updates and corrections. Readers should know where to find the authoritative version of a claim.</p>`],
      [/<p>They should carry:<\/p>\s*<ul>[\s\S]*?<\/ul>/,`<p>Member questions, feedback, working sessions and resources created by the community belong here. Members should be able to contribute knowledge and interpret product news for one another, rather than waiting for staff to supply every conversation.</p>`],
      [/<p>Establish in advance:<\/p>\s*<ul>[\s\S]*?<\/ul>/,`<p>Decide which account publishes confirmed facts, when a founder speaks personally, what moderators can answer and when legal, security or executive review is required. Keep updates in one durable place so speculation cannot replace the company's official account.</p>`],
      [/<p>For every recurring content type, assign:<\/p>\s*<ul>[\s\S]*?<\/ul>/,`<p>Give each recurring content type a primary account, a responsible owner, any required approval and a way to measure success. Supporting accounts should add context or participation, not copy the original announcement.</p>`]
    ];
    for(const [find,replacement] of mappings.slice(1)){if(!find.test(body))throw Error("Missing social list "+find);body=body.replace(find,replacement);}
  }
  if(name==="claude-gtm"){
    body=body.replace(/<p>Create a concise context pack containing:<\/p>\s*<ol[^>]*>[\s\S]*?<\/ol>/,
      `<p><strong>Company and product facts.</strong> Define what the business does, who it serves, what the product can and cannot do, and which claims are approved.</p>
<p><strong>Customers and positioning.</strong> Keep priority segments, buying triggers, objections, qualification criteria, competitor alternatives and evidence in one maintained place.</p>
<p><strong>Commercial operations.</strong> Document pipeline stages, handoffs, content voice, source rules and required approvals. These should be short, current records that a teammate can verify.</p>`);
    body=body.replace(/<p>Examples include:<\/p>\s*<ul>[\s\S]*?<\/ul>/,
      `<p>Start with the work that repeats every week: a market signal brief, an account research dossier, sales-call preparation or analysis of customer conversations. Campaign reviews and competitor changes can use the same approach once the first workflows are reliable.</p>`);
    // Four time-based labels are a sequence, not numbered instructions.
    body=body.replace(/<p><strong>(Monday:|Before calls:|After calls:|Friday:)<\/strong>/g,
      '<p class="editorial-sequence-item"><strong>$1</strong>');
  }
  if(name==="signal-outbound"){
    body=body.replace(/<p>Useful signals include:<\/p>\s*<ul>[\s\S]*?<\/ul>/,
      `<p>Product launches, market expansion, new executives and hiring can signal a change in priorities. So can a relevant integration, a shift in regulation, customer complaints, a competitor's move or repeated questions from users. A funding announcement alone is a weak reason to contact someone; a funded expansion with a new partnerships hire tells a more specific story.</p>`);
    body=body.replace(/<p>Use a simple five-part score from zero to two for each factor:<\/p>\s*<ol[^>]*>[\s\S]*?<\/ol>/,
      `<p>Score each signal from zero to two on five dimensions:</p>
<p class="editorial-sequence-item"><strong>Recency:</strong> Did the change happen recently enough to matter?</p>
<p class="editorial-sequence-item"><strong>Relevance:</strong> Is it directly connected to the problem you solve?</p>
<p class="editorial-sequence-item"><strong>Magnitude:</strong> How much could it change the business?</p>
<p class="editorial-sequence-item"><strong>Access:</strong> Can you reach someone who owns the decision?</p>
<p class="editorial-sequence-item"><strong>Proof:</strong> Do you have credible experience or evidence to offer?</p>`);
  }
  if(name==="buy-context-judgment"){
    body=body.replace("<p>The record of how it decides is. And at every size, the temptation is either to buy that too, inside a vendor's memory product, or to over-build it before it is needed.</p>",
      "<p>The question changes as the organization grows. Buying everything can leave decision history locked into vendor tools; building every system internally can create complexity before anyone knows what is needed.</p>");
    body=body.replace(/<ol>\s*<li>Can every record[\s\S]*?<\/ol>/,
      `<p class="editorial-question"><strong>Can the tool export every decision record, including its history, in a documented format?</strong></p>
<p class="editorial-question"><strong>Will those records remain usable if the vendor is replaced?</strong></p>
<p class="editorial-question"><strong>Does the company control retention and deletion for individual records?</strong></p>`);
    body=body.replace(/<p><strong>In practice<\/strong><\/p>\s*<ul>[\s\S]*?<\/ul>/,
      `<p class="editorial-section-label"><strong>In practice</strong></p>
<p>Start with the company-size guide above and check whether you are building something before you need it. Apply the three questions to tools that write important decisions, then review export and retention provisions with procurement, legal and security before the next contract renewal.</p>`);
    body=body.replace('<p><strong>What would prove this wrong.</strong>',
      '<p class="editorial-section-label"><strong>What would prove this wrong.</strong>');
  }
  if(name==="modular-gtm"){
    body=body.replace(/<p>Keep the commercial thinking close to the business\. Bring in\s+specialists when the problem calls for them\. Keep one team accountable\s+for the outcome\.<\/p>/,
      '<p class="editorial-pullquote">Keep the commercial thinking close to the business. Bring in specialists when the problem calls for them. Keep one team accountable for the outcome.</p>');
    if(!body.includes('class="editorial-pullquote">Keep the commercial thinking'))throw Error("Missing modular highlight");
  }
  if(name==="marketing-ai-workflows"){
    body=body.replace(/<h2 id="the-jobs-it-does-badly-or-dangerously">The jobs it does badly, or dangerously<\/h2>[\s\S]*?(?=<h2 id="how-a-small-team-should-set-it-up">)/,
      `<h2 id="the-jobs-it-does-badly-or-dangerously">Where AI needs human judgment</h2>
<p>AI can produce a polished argument without knowing which position a company should actually take. Original points of view still require people who understand the market, can weigh evidence and are prepared to be accountable for their conclusions. The same goes for facts and public claims: every important number, product capability and regulatory statement needs verification before it is published.</p>
<p>Automated outreach and public replies create a different risk. A plausible but incorrect message can reach a customer or regulator before anyone notices. And a team that replaces real customer conversations with AI summaries may lose the direct observations that make its strategy useful. The best role for AI is to prepare and test material, not replace the decisions or relationships behind it.</p>`);
    body=body.replace(/<h2 id="how-a-small-team-should-set-it-up">How a small team should set it up<\/h2>[\s\S]*?(?=<h2 id="honest-expectations">)/,
      `<h2 id="how-a-small-team-should-set-it-up">How a small team should set it up</h2>
<p>Start with a shared, maintained source of truth: the company's products, approved claims, customer language, competitors and editorial standards. Then choose a few recurring tasks with clear inputs and outputs, such as turning customer calls into CRM notes or reviewing copy against an approved claims library.</p>
<p>Set a review rule before automating publication. Routine formatting might need a light check, while public claims or sensitive material may require an owner or legal reviewer. Store approved outputs so each new task builds on what the team already learned.</p>`);
  }
  if(name==="media-plan"){
    body=body.replace(/(<h2 id="the-questions-to-ask-before-approving">[\s\S]*?<\/h2>)([\s\S]*?)(?=<h2 id="the-plan-for-a-company-that-cannot-buy-the-usual-channels">)/,(_,heading,questions)=>{
      const pars=[...questions.matchAll(/<p>([\s\S]*?)<\/p>/g)].map(x=>x[1]);
      if(pars.length!==6)throw Error("Media questions changed "+pars.length);
      return heading+pars.map((text)=>{
        const q=text.match(/^([\s\S]*?\?)(.*)$/);
        if(!q)return `<p>${text}</p>`;
        return `<p class="editorial-question"><strong>${q[1]}</strong>${q[2]}</p>`;
      }).join("\n")+"\n";
    });
  }
  // Unnumbered paragraphs are clearer than an arbitrary 'top 5' procedural list.
  body=body.replace(/<ol(?:\s[^>]*)?>([\s\S]*?)<\/ol>/g,(_,inner)=>{
    counts.numbered++;
    const items=[...inner.matchAll(/<li(?:\s[^>]*)?>([\s\S]*?)<\/li>/g)].map(x=>x[1].replace(/^\s*<p>/,"").replace(/<\/p>\s*$/,"").trim());
    if(!items.length)throw Error("Cannot convert ordered list "+name);
    return '<div class="editorial-steps">'+items.map(item=>`<p class="editorial-steps-item">${item}</p>`).join("\n")+"</div>";
  });
  // Remove terminal semicolons from retained bullet points, not useful semicolons in prose.
  body=body.replace(/;\s*(<\/p>\s*<\/li>)/g,"$1").replace(/;\s*(<\/li>)/g,"$1");
  // Remove only generic source disclaimers, and discard a section left genuinely empty.
  body=body.replace(/<section class="kol-sources"[^>]*>\s*<h2[^>]*>Sources and notes<\/h2>\s*<\/section>/g,()=>{
    counts.genericSource++;return "";
  });
  // Rebuild the Content List so removed generic sections never leave dead navigation.
  const ids=[],seen=new Set();
  for(const m of body.matchAll(/<h2\b[^>]*\bid="([^"]+)"[^>]*>([\s\S]*?)<\/h2>/g)){
    const id=m[1],label=m[2].replace(/<[^>]*>/g,"").trim();
    if(!seen.has(id)&&!["Related research","Next Move"].includes(label)){
      seen.add(id);ids.push([id,label]);
    }
  }
  const main=ids.filter(([,label])=>!["lowob takeaways","Sources and notes"].includes(label)).slice(0,6);
  const trailing=ids.filter(([,label])=>["lowob takeaways","Sources and notes"].includes(label));
  const escape=s=>s.replace(/[&<>"']/g,c=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[c]));
  const toc=`<aside class="research-article-aside preview-toc"><h2>Content List</h2><ol>${[...main,...trailing].map(([id,label])=>`<li><a href="#${escape(id)}">${escape(label)}</a></li>`).join("")}</ol></aside>`;
  const after=html.slice(end),asideEnd=after.indexOf("</aside>");
  if(asideEnd<0)throw Error("Missing aside close "+name);
  const next=html.slice(0,start)+body+toc+after.slice(asideEnd+"</aside>".length);
  const cleaned=next.slice(next.indexOf('<div class="research-article-body'),next.indexOf('<aside class="research-article-aside preview-toc">'));
  const countAfter=(cleaned.match(/<(?:ul|ol)\b/g)||[]).length;
  if(!next.includes("noindex")||cleaned.includes('id="common-questions"')||cleaned.includes("This is a practical editorial explanation")||cleaned.includes("<ol type="))throw Error("QA failed "+name);
  for(const [id] of [...main,...trailing])if(!cleaned.includes(`id="${id}"`))throw Error("Missing heading anchor "+id);
  return {html:next,stats:{...counts,afterLists:countAfter,beforeWords,afterWords:cleaned.replace(/<[^>]+>/g," ").trim().split(/\s+/).length,sections:[...main,...trailing].length}};
})