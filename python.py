import subprocess

def run_command(command):
    try:
        result = subprocess.run(command, shell=True, capture_output=True, text=True)
        return result.stdout if result.returncode == 0 else result.stderr
    except Exception as e:
        return str(e)

if __name__ == "__main__":
    commands = ["ipconfig", "ping -n 2 www.google.com"]

    for cmd in commands:
        print(f"Running: {cmd}\n")
        output = run_command(cmd)
        print(output + "\n" + "-" * 50 + "\n")
