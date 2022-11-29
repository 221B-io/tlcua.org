<template>
  <div>
    <h1 class="title-font sm:text-4xl text-3xl mb-4 font-medium ">
      Texas Universities Reach Historic Deal with Elsevier: TLCUA Saves Texas Universities Millions Collectively
    </h1>
    <p class="mb-8 leading-relaxed">
      (November 2022) Texas Library Coalition for United Action (TLCUA) is pleased to announce that it has concluded negotiations with Elsevier, and all TLCUA members have signed or are finalizing new agreements for subscription journal access. In 2019, 44 public and private university campuses across Texas joined together to form TLCUA to think creatively about access to faculty publications and the sustainability of journal subscriptions. TLCUA has negotiated with Elsevier, the world’s largest publisher of scientific journals, including The Lancet and Cell and over 2,500 other journals covering topics in medicine, biology, psychology, engineering, business and more. The TLCUA effort aligns with other libraries across academia that have sought to evolve the relationship between libraries and publishers and find new ways to thrive together.
    </p>
    <p class="mb-8 leading-relaxed">
      All TLCUA members will receive a discount on journal subscriptions–some as high as 30%–while still maintaining significant amounts of access to journals and combined, will realize a savings of over $4.5M annually. Beyond initial cost savings, Elsevier agreed to a maximum annual increase of 2% over the course of the license agreement, with some years as low as 0%, which is significantly lower than industry standard. 
    </p>
    <p class="mb-8 leading-relaxed">
      John Sharp, Chancellor of the Texas A&M University System, said, "Since the beginning of the negotiations, the administration and faculty have stood behind the libraries in this effort. We are proud that so many institutions in Texas came together to realize cost savings and increase access not only in Texas but around the world."
    </p>
    <p class="mb-8 leading-relaxed">
      TLCUA certainly had ambitious goals to negotiate sustainable pricing for strained library budgets in higher education, but also made progress on its other goals of improving access to scholarship and providing authors with greater control over their published work over time. 
    </p>
    <p class="mb-8 leading-relaxed">
      TLCUA and Elsevier have agreed to partner on a pilot project to revert ownership of journal articles back to original authors—and not just those at TLCUA-member institutions. Currently, authors transfer copyright of their work in exchange for that work being published. This pilot will provide for rights to go back to  authors after a period of time that will be collaboratively determined with Elsevier. A subset of Elsevier journals will be chosen to study the impact of the copyright reversion pilot for authors and its applicability more broadly to STEM (scientific, technical, engineering and medical) publishers.
    </p>
    <p class="mb-8 leading-relaxed">
      Further, all TLCUA-member authors who choose to publish their work under an open access license will have access to discounted author publication charges (APCs). TLCUA also negotiated a license template that removed non-disclosure terms, restrictions on sharing usage data, and 44-year-old limitations on interlibrary loans (i.e., CONTU Guidelines) to expand library collaboration and improve how libraries can share information on journal usage.
    </p>
    <p class="mb-8 leading-relaxed">
      "We worked very hard with Elsevier leadership and negotiators to come to an agreement that aligns the values and priorities of our members and those held by Elsevier," says lead negotiator and open access advocate Jeffrey Spies of 221B Consulting. "I am particularly excited about the copyright pilot project. Copyright is an often-overlooked ingredient in securing a more open scholarship, and the library community has a real opportunity here: to work with authors to share their work openly because it will once again be their work."
    </p>
    <p class="mb-8 leading-relaxed">
      Along with Spies, the team negotiating with Elsevier consisted of faculty, library leaders and librarians with collections expertise representing the diverse membership of TLCUA. They are David Carlson, former Dean of University Libraries at Texas A&M University; Kelly Gonzalez, Assistant Vice President for Library Services at the University of Texas Southwestern Medical Center; Deborah Hathaway, Acquisitions and Collection Development Librarian at the University of Dallas; Ian Knabe, Head of Acquisitions and Resource Sharing at the University of Houston; Asheley Landrum, Associate Professor and interim Assistant Dean for Research in the College of Media & Communication at Texas Tech University; Vagheesh Narasimhan, Assistant Professor of Integrative Biology and Statistics and Data Sciences at the University of Texas Austin; Richard Nollan, former Dean of Libraries at Texas Tech Health Sciences Center; Alexia Thompson-Young, Assistant Director of Scholarly Resources at the University of Texas Austin; Charles Weaver, Professor of Psychology and Neuroscience and Associate Dean for Sciences at Baylor University; and Ginger Williams, Head Acquisitions Administrative Librarian at Texas State University.
    </p>
    <p class="mb-8 leading-relaxed">
      Initial workshops to define the parameters of the pilot project will begin soon. TLCUA has begun exploring their next negotiation priorities and other projects that can benefit from state-wide collaboration. Sara Lowman, TLCUA Chair and Vice Provost and University Librarian at Rice University, is enthusiastic about the future of TLCUA. “The Coalition demonstrated what can be done when Texas institutions aligned by their principles work together. We have big plans,” she said. 
    </p>
    <h2>
      About TLCUA    
    </h2>
    <p class="mb-8 leading-relaxed">
      TLCUA represents more than 660,000 students and 44,000 faculty. This consortium is one of the largest and most diverse library consortia in the United States.  Faculty in the Coalition member libraries account for 7.2% of all research output in the United States and about 6% of all U.S. research published by Elsevier. The economic impact of Coalition members is significant with annual expenditures exceeding $275 million.
    </p>
    <h2>
      Current TLCUA members are:    
    </h2>
    <ul>
      <li
        v-for="row in institutions" 
        class="list-disc mx-4"
      >{{row}}</li>
    </uL>
  </div>
</template>

<script lang="ts">
export default {
  components: {},
  async fetch() {
    const data = await this.$content('people').fetch()
    this.people = data.body
  },
  data () {
    return {
      people: []
    }
  }
}
</script>

<style>

</style>

