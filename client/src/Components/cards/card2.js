import * as React from 'react';
import AspectRatio from '@mui/joy/AspectRatio';
import Card from '@mui/joy/Card';
import CardContent from '@mui/joy/CardContent';
import CardOverflow from '@mui/joy/CardOverflow';
import Divider from '@mui/joy/Divider';
import Typography from '@mui/joy/Typography';
import cimage1 from '../../resources/images/card1.jpg'
import cimage2 from '../../resources/images/card2.jpg'
import cimage3 from '../../resources/images/card3.jpg'
import cimage4 from '../../resources/images/card4.jpg'

export default function OverflowCard() {
  return (
    <div style={{ display: 'flex', justifyContent: 'center', gap: '20px', padding: '50px' }}>
      <Card variant="outlined" sx={{ width: 420 }}>
      <CardOverflow>
        <AspectRatio ratio="2">
          <img
            src={cimage1}
            srcSet={cimage1}
            loading="lazy"
            alt=""
          />
        </AspectRatio>
      </CardOverflow>
      <CardContent>
        <Typography level="title-md">Yosemite National Park</Typography>
        <Typography level="body-sm">California</Typography>
      </CardContent>
      <CardOverflow variant="soft" sx={{ bgcolor: 'background.level1' }}>
        <Divider inset="context" />
        <CardContent orientation="horizontal">
        <Typography level="body-xs" fontWeight="md" textColor="text.secondary">
            on progress
          </Typography>
          <Divider orientation="vertical" />
          <Typography level="body-xs" fontWeight="md" textColor="text.secondary">
            Ministry of Education
          </Typography>
        </CardContent>
      </CardOverflow>
    </Card>

    <Card variant="outlined" sx={{ width: 420 }}>
      <CardOverflow>
        <AspectRatio ratio="2">
          <img
            src={cimage2}
            srcSet={cimage2}
            loading="lazy"
            alt=""
          />
        </AspectRatio>
      </CardOverflow>
      <CardContent>
        <Typography level="title-md">Yosemite National Park</Typography>
        <Typography level="body-sm">California</Typography>
      </CardContent>
      <CardOverflow variant="soft" sx={{ bgcolor: 'background.level1' }}>
        <Divider inset="context" />
        <CardContent orientation="horizontal">
        <Typography level="body-xs" fontWeight="md" textColor="text.secondary">
            on progress
          </Typography>
          <Divider orientation="vertical" />
          <Typography level="body-xs" fontWeight="md" textColor="text.secondary">
            Ministry of Education
          </Typography>
        </CardContent>
      </CardOverflow>
    </Card>

    <Card variant="outlined" sx={{ width: 420 }}>
      <CardOverflow>
        <AspectRatio ratio="2">
          <img
            src={cimage3}
            srcSet={cimage3}
            loading="lazy"
            alt=""
          />
        </AspectRatio>
      </CardOverflow>
      <CardContent>
        <Typography level="title-md">Yosemite National Park</Typography>
        <Typography level="body-sm">California</Typography>
      </CardContent>
      <CardOverflow variant="soft" sx={{ bgcolor: 'background.level1' }}>
        <Divider inset="context" />
        <CardContent orientation="horizontal">
        <Typography level="body-xs" fontWeight="md" textColor="text.secondary">
            on progress
          </Typography>
          <Divider orientation="vertical" />
          <Typography level="body-xs" fontWeight="md" textColor="text.secondary">
            Ministry of Education
          </Typography>
        </CardContent>
      </CardOverflow>
    </Card>
    <Card variant="outlined" sx={{ width: 420 }}>
      <CardOverflow>
        <AspectRatio ratio="2">
          <img
            src={cimage4}
            srcSet={cimage4}
            loading="lazy"
            alt=""
          />
        </AspectRatio>
      </CardOverflow>
      <CardContent>
        <Typography level="title-md">Yosemite National Park</Typography>
        <Typography level="body-sm">California</Typography>
      </CardContent>
      <CardOverflow variant="soft" sx={{ bgcolor: 'background.level1' }}>
        <Divider inset="context" />
        <CardContent orientation="horizontal">
          <Typography level="body-xs" fontWeight="md" textColor="text.secondary">
            on progress
          </Typography>
          <Divider orientation="vertical" />
          <Typography level="body-xs" fontWeight="md" textColor="text.secondary">
            Ministry of Education
          </Typography>
        </CardContent>
      </CardOverflow>
    </Card>
    </div>
  );
}
