---
layout: home
hero:
  name: "Build DAO"
  text: "Turn Your Ideas into MVPs"
  tagline: Join the decentralized builder community turning ideas into production-ready MVPs in weeks, not months.
  actions:
    - theme: brand
      text: Submit Project
      link: /submit
    - theme: alt
      text: View Process
      link: /process
features:
  - icon: 🚀
    title: Fast Turnaround
    details: Most MVPs are delivered within 2-4 weeks
  - icon: ✨
    title: Quality Guaranteed
    details: Built by experienced developers with proven track records
  - icon: 🛠️
    title: Launch Ready
    details: Production-ready code with deployment support
---

<script setup>
import { projects } from './data/projects'
import { builders } from './data/builders'
</script>

<div class="py-24">
  <div class="container mx-auto px-6">
    <h2 class="text-4xl font-bold mb-12">Featured Projects</h2>
    <!-- Project grid component -->
  </div>
</div>

<div class="py-24 bg-gray-800">
  <div class="container mx-auto px-6">
    <h2 class="text-4xl font-bold mb-12">Our Builders</h2>
    <!-- Builders grid component -->
  </div>
</div>