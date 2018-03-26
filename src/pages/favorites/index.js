import React, { Component } from 'react';
import {
  View,
  Text,
  FlatList,
} from 'react-native';

import styles from './styles';

import FavoriteItem from './components/FavoriteItem';

class Favorites extends Component {
  static navigationOptions = {
    title: 'Meus Favoritos',
  };

  state = {
    favorites: [
      {
        id: 92505492,
        name: "rocketseat.com.br",
        full_name: "RocketSeat/rocketseat.com.br",
        owner: {
        login: "RocketSeat",
        id: 28929274,
        avatar_url: "https://avatars0.githubusercontent.com/u/28929274?v=4",
        gravatar_id: "",
        url: "https://api.github.com/users/RocketSeat",
        html_url: "https://github.com/RocketSeat",
        followers_url: "https://api.github.com/users/RocketSeat/followers",
        following_url: "https://api.github.com/users/RocketSeat/following{/other_user}",
        gists_url: "https://api.github.com/users/RocketSeat/gists{/gist_id}",
        starred_url: "https://api.github.com/users/RocketSeat/starred{/owner}{/repo}",
        subscriptions_url: "https://api.github.com/users/RocketSeat/subscriptions",
        organizations_url: "https://api.github.com/users/RocketSeat/orgs",
        repos_url: "https://api.github.com/users/RocketSeat/repos",
        events_url: "https://api.github.com/users/RocketSeat/events{/privacy}",
        received_events_url: "https://api.github.com/users/RocketSeat/received_events",
        type: "Organization",
        site_admin: false
        },
        private: false,
        html_url: "https://github.com/RocketSeat/rocketseat.com.br",
        description: "Tire sua ideia do papel e dê vida à sua startup",
        fork: false,
        url: "https://api.github.com/repos/RocketSeat/rocketseat.com.br",
        forks_url: "https://api.github.com/repos/RocketSeat/rocketseat.com.br/forks",
        keys_url: "https://api.github.com/repos/RocketSeat/rocketseat.com.br/keys{/key_id}",
        collaborators_url: "https://api.github.com/repos/RocketSeat/rocketseat.com.br/collaborators{/collaborator}",
        teams_url: "https://api.github.com/repos/RocketSeat/rocketseat.com.br/teams",
        hooks_url: "https://api.github.com/repos/RocketSeat/rocketseat.com.br/hooks",
        issue_events_url: "https://api.github.com/repos/RocketSeat/rocketseat.com.br/issues/events{/number}",
        events_url: "https://api.github.com/repos/RocketSeat/rocketseat.com.br/events",
        assignees_url: "https://api.github.com/repos/RocketSeat/rocketseat.com.br/assignees{/user}",
        branches_url: "https://api.github.com/repos/RocketSeat/rocketseat.com.br/branches{/branch}",
        tags_url: "https://api.github.com/repos/RocketSeat/rocketseat.com.br/tags",
        blobs_url: "https://api.github.com/repos/RocketSeat/rocketseat.com.br/git/blobs{/sha}",
        git_tags_url: "https://api.github.com/repos/RocketSeat/rocketseat.com.br/git/tags{/sha}",
        git_refs_url: "https://api.github.com/repos/RocketSeat/rocketseat.com.br/git/refs{/sha}",
        trees_url: "https://api.github.com/repos/RocketSeat/rocketseat.com.br/git/trees{/sha}",
        statuses_url: "https://api.github.com/repos/RocketSeat/rocketseat.com.br/statuses/{sha}",
        languages_url: "https://api.github.com/repos/RocketSeat/rocketseat.com.br/languages",
        stargazers_url: "https://api.github.com/repos/RocketSeat/rocketseat.com.br/stargazers",
        contributors_url: "https://api.github.com/repos/RocketSeat/rocketseat.com.br/contributors",
        subscribers_url: "https://api.github.com/repos/RocketSeat/rocketseat.com.br/subscribers",
        subscription_url: "https://api.github.com/repos/RocketSeat/rocketseat.com.br/subscription",
        commits_url: "https://api.github.com/repos/RocketSeat/rocketseat.com.br/commits{/sha}",
        git_commits_url: "https://api.github.com/repos/RocketSeat/rocketseat.com.br/git/commits{/sha}",
        comments_url: "https://api.github.com/repos/RocketSeat/rocketseat.com.br/comments{/number}",
        issue_comment_url: "https://api.github.com/repos/RocketSeat/rocketseat.com.br/issues/comments{/number}",
        contents_url: "https://api.github.com/repos/RocketSeat/rocketseat.com.br/contents/{+path}",
        compare_url: "https://api.github.com/repos/RocketSeat/rocketseat.com.br/compare/{base}...{head}",
        merges_url: "https://api.github.com/repos/RocketSeat/rocketseat.com.br/merges",
        archive_url: "https://api.github.com/repos/RocketSeat/rocketseat.com.br/{archive_format}{/ref}",
        downloads_url: "https://api.github.com/repos/RocketSeat/rocketseat.com.br/downloads",
        issues_url: "https://api.github.com/repos/RocketSeat/rocketseat.com.br/issues{/number}",
        pulls_url: "https://api.github.com/repos/RocketSeat/rocketseat.com.br/pulls{/number}",
        milestones_url: "https://api.github.com/repos/RocketSeat/rocketseat.com.br/milestones{/number}",
        notifications_url: "https://api.github.com/repos/RocketSeat/rocketseat.com.br/notifications{?since,all,participating}",
        labels_url: "https://api.github.com/repos/RocketSeat/rocketseat.com.br/labels{/name}",
        releases_url: "https://api.github.com/repos/RocketSeat/rocketseat.com.br/releases{/id}",
        deployments_url: "https://api.github.com/repos/RocketSeat/rocketseat.com.br/deployments",
        created_at: "2017-05-26T11:45:18Z",
        updated_at: "2018-03-12T12:00:41Z",
        pushed_at: "2018-03-12T12:06:17Z",
        git_url: "git://github.com/RocketSeat/rocketseat.com.br.git",
        ssh_url: "git@github.com:RocketSeat/rocketseat.com.br.git",
        clone_url: "https://github.com/RocketSeat/rocketseat.com.br.git",
        svn_url: "https://github.com/RocketSeat/rocketseat.com.br",
        homepage: "http://rocketseat.com.br",
        size: 23167,
        stargazers_count: 1,
        watchers_count: 1,
        language: "HTML",
        has_issues: false,
        has_projects: false,
        has_downloads: true,
        has_wiki: false,
        has_pages: false,
        forks_count: 1,
        mirror_url: null,
        archived: false,
        open_issues_count: 0,
        license: null,
        forks: 1,
        open_issues: 0,
        watchers: 1,
        default_branch: "master",
        organization: {
        login: "RocketSeat",
        id: 28929274,
        avatar_url: "https://avatars0.githubusercontent.com/u/28929274?v=4",
        gravatar_id: "",
        url: "https://api.github.com/users/RocketSeat",
        html_url: "https://github.com/RocketSeat",
        followers_url: "https://api.github.com/users/RocketSeat/followers",
        following_url: "https://api.github.com/users/RocketSeat/following{/other_user}",
        gists_url: "https://api.github.com/users/RocketSeat/gists{/gist_id}",
        starred_url: "https://api.github.com/users/RocketSeat/starred{/owner}{/repo}",
        subscriptions_url: "https://api.github.com/users/RocketSeat/subscriptions",
        organizations_url: "https://api.github.com/users/RocketSeat/orgs",
        repos_url: "https://api.github.com/users/RocketSeat/repos",
        events_url: "https://api.github.com/users/RocketSeat/events{/privacy}",
        received_events_url: "https://api.github.com/users/RocketSeat/received_events",
        type: "Organization",
        site_admin: false
        },
        network_count: 1,
        subscribers_count: 4
        }
    ],
  };

  renderList = () => (
    <FlatList
      data={this.state.favorites}
      keyExtractor={item => String(item.id)}
      renderItem={({ item }) => <FavoriteItem repository={item} />}
    />
  );

  render() {
    return (
      <View style={styles.container}>
        { !this.state.favorites.length ?
          <Text style={styles.empty}>Nenhum favorito adicionado</Text>
         : this.renderList() }
      </View>
    );
  }
}

export default Favorites;
