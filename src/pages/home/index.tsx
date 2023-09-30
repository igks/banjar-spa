import Space from "../../components/Space";
import CardSaldo, { CardSaldoProps } from "./CardSaldo";
import { Container, Grid } from "@mui/material";
import CardInfo from "./CardInfo";
import CardTimeline from "./CardTimeline";

const Home = () => {
  const list: CardSaldoProps[] = [
    {
      title: "Kas Banjar",
      value: "1000000",
    },
    {
      title: "Kas Nyepi",
      value: "2000000",
    },
    { title: "Kas Piodalan", value: "3000000" },
    { title: "Kas Banten", value: "4000000" },
  ];

  return (
    <Container sx={{ padding: 0 }}>
      <Grid container columnSpacing={2} rowSpacing={2}>
        {list.map((item) => (
          <Grid key={item.title} item xs={6}>
            <CardSaldo title={item.title} value={item.value} />
          </Grid>
        ))}
      </Grid>
      <Space h={2} />
      <CardInfo
        title="Informasi Umum"
        content="Banjar Batu Aji Barat terdiri dari 29 KK (26 Keluarga dan 3 Muda Mudi)"
      />
      <Space h={1} />
      <CardInfo
        title="Rincian Iuran"
        content="A. Iuran perbulan Banjar Batu Aji Barat adalah
        Rp. 100.000, dibagi menjadi:
        
        Kas Banjar	Rp. 13.000
        Iuran BOP	Rp. 40.000
        Iuran Tabungan Nyepi	Rp. 15.000
        Iuran Tabungan Piodalan	Rp. 20.000
        Iuran Banten	Rp. 8.000
        Iuran WHDI	Rp. 2.000
        Operasional Pengurus	Rp. 2.000
        B. Iuran perbulan Muda Mudi adalah
        Rp. 75.000, dibagi menjadi:
        
        Iuran BOP	Rp. 40.000
        Iuran Tabungan Nyepi	Rp. 15.000
        Iuran Tabungan Piodalan	Rp. 20.000
        C. Arisan perbulan
        Rp. 50.000
        
        D. Iuran Pembangunan Pura
        Rp. 1.000.000/KK dan dicicil 10 kali."
      />
      <Space h={1} />
      <CardTimeline />
    </Container>
  );
};

export default Home;
