using NUnit.Framework;

namespace Tests
{
	public class Person
	{
		public string name = "Geoff";
	}

	[TestFixture]
	public class Tests
	{
		public static Person person = null;

		[OneTimeSetUp]
		public void OneTimeSetUp()
		{
			// called once before all tests
		}

		[SetUp]
		public void Setup()
		{
			// called before every test
			person = new Person();
		}

		[TestCase("Geoff", 44)]
		[TestCase("Gemma", 48)]
		[TestCase("Harold", 52)]
		[Test]
		public void ParameterisedTest(string name, int age)
		{
			Assert.IsTrue(name.StartsWith("G"));
			Assert.IsTrue(age > 40 && age < 60);
		}

		[Test]
		public void PersonTestPass()
		{
			Assert.AreSame(person.name, "Geoff");
			Assert.IsInstanceOf<Person>(person);
		}

		[Test]
		public void PersonTestFail()
		{
			Assert.AreEqual(person.name, "Geode");
			Assert.IsInstanceOf<Person>(person);
		}

		[TearDown]
		public void TearDown()
		{
			// called after every test
		}

		[OneTimeTearDown]
		public void OneTimeTearDown()
		{
			// called once after all tests
		}

	}
}
