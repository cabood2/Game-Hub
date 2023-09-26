import {
  Button,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Select,
} from "@chakra-ui/react";
import usePlatforms from "../hooks/usePlatforms";
import { Platform } from "../entities/Platform";
import { BsChevronDown } from "react-icons/bs";
import usePlatform from "../hooks/usePlatform";
import useGameQueryStore from "../services/store";

const PlatformSelector = () => {
  const setSelectedPlatformId = useGameQueryStore((s) => s.setPlatformId);
  const selectedPlatformId = useGameQueryStore((s) => s.gameQuery.platformId);

  const { data, error } = usePlatforms();
  const selectedPlatform = usePlatform(selectedPlatformId);

  if (error) return null;
  return (
    <Menu>
      <MenuButton as={Button} rightIcon={<BsChevronDown />}>
        {selectedPlatform?.name || "Platforms"}
      </MenuButton>
      <MenuList>
        {data?.results.map((platform) => (
          <MenuItem
            onClick={() => setSelectedPlatformId(platform.id)}
            key={platform.id}
          >
            {platform.name}
          </MenuItem>
        ))}
      </MenuList>
    </Menu>
  );
};

export default PlatformSelector;
