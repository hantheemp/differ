import Version from '@renderer/atoms/Version/Version'
import Copyright from '@renderer/molecules/Copyright/Copyright'
import SocialLinks from '@renderer/molecules/SocialLinks/SocialLinks'

export default function Footer() {
  return (
    <footer className="bg-neutral text-neutral-content p-4 space-y-2">
      <div className="footer sm:footer-horizontal items-center">
        <Copyright />
        <SocialLinks />
      </div>
      <div className="text-center">
        <Version />
      </div>
    </footer>
  )
}
