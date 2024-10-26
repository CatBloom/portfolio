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
                  <td>{{ v.name }}</td>
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
          <p>Git,Gitflow,Docker,DockerCompose,Nginx,Apache,Jira,Slack,MVC,Karma,Terraform</p>
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
  }[];
}

const skills: Skills[] = [
  {
    lang: 'Frontend',
    exp: [
      {
        name: 'React',
        year: 1,
        detail: 'MUI,Recoil,Redux,Next.js',
      },
      {
        name: 'Vue',
        year: 2,
        detail: 'Pania',
      },
      {
        name: 'Angular',
        year: 2,
      },
      {
        name: 'HTML/CSS',
        year: 4,
        detail: 'BEM,SCSS,Bootstrap,TailwindCSS',
      },
      {
        name: 'TypeScript',
        year: 4,
      },
    ],
  },
  {
    lang: 'Backend',
    exp: [
      {
        name: 'Golang',
        year: 4,
        detail: 'Echo,Gin',
      },
      {
        name: 'Python',
        year: 2,
        detail: 'Django',
      },
      {
        name: 'PHP',
        year: 2,
        detail: 'Cake,WordPress',
      },
      {
        name: 'Node.js',
        year: 4,
      },
    ],
  },
  {
    lang: 'Infra/Server',
    exp: [
      {
        name: 'AWS',
        year: 2,
        detail: 'EC2,RDS,DynamoDB,S3,SAM,Lambda,CodeBuild etc...',
      },
      {
        name: 'Firebase',
        year: 2,
        detail: 'FirebaseAuthentication,CloudFirestore',
      },
      {
        name: 'Database',
        year: 4,
        detail: 'MySQL,PostgreSQL',
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
