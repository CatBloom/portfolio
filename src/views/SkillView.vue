<template>
  <div class="skil">
    <PageContent>
      <template #title> Skill </template>
    </PageContent>

    <div class="skill-table" v-for="(skill, i) in skills" :key="i">
      <PageContent>
        <template #sub-title>{{ skill.lang }}</template>
        <template #content>
          <div class="skill-table-content">
            <table>
              <thead>
                <tr>
                  <th>TechStack</th>
                  <th>Exp</th>
                  <th>Details</th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="(v, i) in skill.exp" :key="i">
                  <td>
                    <s v-if="v.inactive">{{ v.name }}</s>
                    <template v-else>{{ v.name }}</template>
                  </td>
                  <td>{{ v.year }}年</td>
                  <td>{{ v.detail }}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </template>
      </PageContent>
    </div>

    <PageContent>
      <template #sub-title>Other</template>
      <template #content>
        <div class="other">
          <p>
            Git,Gitflow,Docker,DockerCompose,Terraform,Nginx,Apache,Vercel
            <br />
            Vite,Karma,Playwright,MVC,Jira,Slack,ClaudeCode,Codex
          </p>
        </div>
      </template>
    </PageContent>
  </div>
</template>

<script setup lang="ts">
import PageContent from '../components/PageContent.vue';

interface Skills {
  lang: string;
  exp: {
    name: string;
    year: number;
    detail?: string;
    inactive?: boolean;
  }[];
}

const skills: Skills[] = [
  {
    lang: 'Frontend',
    exp: [
      {
        name: 'React',
        year: 4,
        detail: 'MUI,Recoil,Redux,Jotai,Next.js',
      },
      {
        name: 'Vue',
        year: 5,
        detail: 'Pinia,VueRouter',
      },
      {
        name: 'Angular',
        year: 2,
        inactive: true,
      },
      {
        name: 'HTML/CSS',
        year: 6,
        detail: 'BEM,SCSS,Bootstrap,TailwindCSS',
      },
      {
        name: 'TypeScript',
        year: 6,
      },
    ],
  },
  {
    lang: 'Backend',
    exp: [
      {
        name: 'Golang',
        year: 5,
        detail: 'Echo,Gin,GORM',
      },
      {
        name: 'Python',
        year: 4,
        detail: 'Django,FastAPI,Flask',
      },
      {
        name: 'PHP',
        year: 4,
        detail: 'Cake,WordPress',
      },
      {
        name: 'Node.js',
        year: 6,
        detail: 'Hono,NestJS',
      },
    ],
  },
  {
    lang: 'Infra/Server',
    exp: [
      {
        name: 'AWS',
        year: 4,
        detail: 'EC2,ECS,RDS,DynamoDB,S3,CloudFront,Route53,APIGateway,SAM,Lambda etc...',
      },
      {
        name: 'Cloudflare',
        year: 1,
        detail: 'Access,WorkersKV',
      },
      {
        name: 'Firebase',
        year: 2,
        detail: 'FirebaseAuthentication,CloudFirestore',
      },
      {
        name: 'Database',
        year: 6,
        detail: '設計,MySQL,PostgreSQL,MongoDB',
      },
    ],
  },
];
</script>

<style scoped lang="scss">
.skill-table {
  .skill-table-content {
    padding: 1rem;
    table {
      text-align: left;
      border-collapse: collapse;
      th {
        border-bottom: 1px solid;
        padding: 0.5rem;
      }
      td {
        padding: 0.5rem;
        word-break: break-all;
      }
    }
  }
}

.other {
  margin-left: 2rem;
  word-break: break-all;
}
</style>
