import './App.css';
import { useState, useEffect } from "react";
import { Layout, Button } from "antd";
import { UnorderedListOutlined } from "@ant-design/icons";

import { getSongs } from "./utils";
import Panel from "./components/Panel.js";
import PlayList from "./components/PlayList";

function App() {
    const songs = getSongs();
    const [playingIndex, setPlayingIndex] = useState(0);
    const [nextIndex, setNextIndex] = useState((playingIndex + 1) % songs.length);
    const [ifPlayList, setIfPlayList] = useState(false);

    const { Header, Sider, Content, Footer } = Layout;

    useEffect(() => { setNextIndex((playingIndex + 1) % songs.length); }, [playingIndex, songs.length]);

    return (
      <main className="music-player">
          <Layout>
              <Sider collapsed={!ifPlayList} collapsedWidth={0} width={300}>
                  <PlayList
                      songs={songs}
                      playingIndex={playingIndex}
                      setPlayingIndex={setPlayingIndex}
                      ifPlayList={ifPlayList}
                      setIfPlayList={setIfPlayList}
                  />
              </Sider>
              <Layout>
                  <Header>
                      <Button size="large" onClick={() => setIfPlayList(!ifPlayList)}><UnorderedListOutlined /> Playlist </Button>
                  </Header>
                  <Content>
                      <Panel
                          songs={songs}
                          playingIndex={playingIndex}
                          setPlayingIndex={setPlayingIndex}
                          nextIndex={nextIndex}
                          setNextIndex={setNextIndex}
                      />
                  </Content>
                  <Footer>
                      <p>Yanjun Chen &copy; 2022, Created for: SI579 Building Interactive Applications</p>
                  </Footer>
              </Layout>
          </Layout>
      </main>
    );
}

export default App;
